import { Component } from "../../../core/Component.js";
import { listUpCategoryIds, listUpPressName } from "../../../utils/utils.js";
import { ListViewHeader } from "./ListViewHeader.js";
import { ListViewMain } from "./ListViewMain.js";
import { getPageNumberByDir } from "../../../utils/utils.js";
import { ProgressBarAnimationManager } from "./ListViewAnimaionManager.js";
import { ALL_PRESSES } from "../../../constants/index.js";
import { PREV_PAGE_BTN, NEXT_PAGE_BTN } from "../../../constants/ui.js";

export class ListView extends Component {
  constructor(target, props) {
    super(target, props);
    this.progressBarAnimation = new ProgressBarAnimationManager({
      moveToNextPageToward: this.moveToNextPageToward.bind(this),
      getCurrentCategoryNode: this.getCurrentCategoryNode.bind(this),
    });
    this.initProgressBarAnimation();
  }

  initProgressBarAnimation() {
    this.progressBarAnimation.init();
  }

  setUp() {
    this._state = this.getCurrentListViewState(this.props);
  }

  templete() {
    return `
      <div class="list-view">
        <div class="view-page-btn left">${PREV_PAGE_BTN}</div>
        <div class="view-page-btn right">${NEXT_PAGE_BTN}</div>
        <div class="list-view__header"></div>
        <div class="list-view__main"></div>
      </div>
    `;
  }

  setEvent() {
    this.target.addEventListener("click", ({ target }) => {
      if (target.closest(".view-page-btn")) {
        const [_, dir] = target.closest(".view-page-btn").className.split(" ");
        this.moveToNextPageToward(dir);
      }
    });
  }

  mounted() {
    const listViewHeader = this.target.querySelector(".list-view__header");
    const {
      currentPageInCategory,
      currentCategory,
      currentCategoryTotalPage,
      categoryIds,
      filterBtnState,
      currentCategoryData,
      currentPressSubscribeStatus,
    } = this._state;
    const { subscribePress, pressCategories } = this.props;
    const { moveToTargetCategoryBy, initProgressBarAnimation } = this;

    new ListViewHeader(listViewHeader, {
      currentPageInCategory,
      currentCategory,
      currentCategoryTotalPage,
      categoryIds,
      pressCategories,
      filterBtnState,
      moveToTargetCategoryBy: moveToTargetCategoryBy.bind(this),
      initProgressBarAnimation: initProgressBarAnimation.bind(this),
    });

    const listViewMain = this.target.querySelector(".list-view__main");

    new ListViewMain(listViewMain, {
      currentCategoryData,
      currentPressSubscribeStatus,
      subscribePress,
    });
  }

  getCurrentListViewState(listViewData, dir) {
    const FIRST_PAGE = 1;

    let {
      currentPageInAllCategories,
      currentPageInCategory,
      currentCategory,
      targetCategory,
      pressData,
      filterBtnState,
      targetPressSubscribeStatus,
    } = listViewData;

    const categoryIds =
      filterBtnState === ALL_PRESSES
        ? listUpCategoryIds(pressData)
        : listUpPressName(pressData);
    const sortedPressData = this.sortPressDataByCategoryId(
      categoryIds,
      pressData,
      filterBtnState
    );
    const allPressContents = this.getAllPressContents(sortedPressData);
    const categoryLengths = this.getCategoryLengths(sortedPressData);
    const LAST_PAGE = this.getLastPage(allPressContents);

    let nextPageInAllCategories =
      currentPageInAllCategories && !targetCategory
        ? getPageNumberByDir(dir, currentPageInAllCategories)
        : this.getPageNumberByTargetCategory(
            targetCategory,
            categoryLengths,
            FIRST_PAGE
          );

    if (nextPageInAllCategories > LAST_PAGE) {
      nextPageInAllCategories = FIRST_PAGE;
    } else if (nextPageInAllCategories < FIRST_PAGE) {
      nextPageInAllCategories = LAST_PAGE;
    }

    let nextCategory;
    if (targetCategory) {
      nextCategory = targetCategory;
    } else {
      nextCategory =
        filterBtnState === ALL_PRESSES
          ? allPressContents[nextPageInAllCategories - 1].category_id
          : allPressContents[nextPageInAllCategories - 1].name;
    }

    const nextCategoryTotalPage = categoryLengths[nextCategory];

    let nextPageInCategory =
      currentCategory !== nextCategory || !currentPageInCategory
        ? dir === "right" || dir === undefined
          ? FIRST_PAGE
          : nextCategoryTotalPage
        : getPageNumberByDir(dir, currentPageInCategory);

    const nextCategoryData = allPressContents[nextPageInAllCategories - 1];
    const currentPressSubscribeStatus =
      targetPressSubscribeStatus[nextPageInAllCategories - 1];

    return {
      currentPageInAllCategories: nextPageInAllCategories,
      currentPageInCategory: nextPageInCategory,
      currentCategory: nextCategory,
      currentCategoryTotalPage: nextCategoryTotalPage,
      currentPressSubscribeStatus,
      currentCategoryData: nextCategoryData,
      categoryIds,
      pressData,
      filterBtnState,
      targetPressSubscribeStatus,
    };
  }

  sortPressDataByCategoryId(categoryIds, pressData, filterBtnState) {
    const sortedPressData = {};

    categoryIds.forEach((id) => (sortedPressData[id] = []));
    pressData.forEach((press) => {
      if (filterBtnState === ALL_PRESSES) {
        sortedPressData[press.category_id].push(press);
      } else {
        sortedPressData[press.name].push(press);
      }
    });
    return sortedPressData;
  }

  getCategoryLengths(sortedPressData) {
    const categoryLengths = {};
    const categoryLengthsInArray = Object.entries(sortedPressData).map(
      ([category, content]) => [category, content.length]
    );
    categoryLengthsInArray.forEach(([category, length]) => {
      categoryLengths[category] = length;
    });
    return categoryLengths;
  }

  getAllPressContents(sortedPressData) {
    return Object.values(sortedPressData).flat();
  }

  getLastPage(allPressContents) {
    return allPressContents.length;
  }

  getPageNumberByTargetCategory(targetCategory, categoryLengths, FIRST_PAGE) {
    let CURRENT_PAGE = FIRST_PAGE;
    if (!targetCategory) return CURRENT_PAGE;

    for (const [key, value] of Object.entries(categoryLengths)) {
      if (key === targetCategory) return CURRENT_PAGE;
      CURRENT_PAGE += value;
    }
  }

  moveToTargetCategoryBy(targetCategory, filterBtnState) {
    const { pressData, targetPressSubscribeStatus } = this._state;

    this.setState(
      this.getCurrentListViewState({
        pressData,
        targetPressSubscribeStatus,
        filterBtnState,
        targetCategory,
      })
    );
    this.initProgressBarAnimation();
  }

  moveToNextPageToward(dir) {
    this.setState(this.getCurrentListViewState(this._state, dir));
    this.initProgressBarAnimation();
  }

  getCurrentCategoryNode() {
    return this.target.querySelector(
      `[data-category-id="${this._state.currentCategory}"`
    );
  }
}

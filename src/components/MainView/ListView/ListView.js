import { Component } from "../../../core/Component.js";
import { listUpCategoryIds, listUpPressName } from "../../../utils/utils.js";
import { ListViewHeader } from "./ListViewHeader.js";
import { ListViewMain } from "./ListViewMain.js";
import { getPageNumberByDir } from "../../../utils/utils.js";
import { ProgressBarAnimationManager } from "./ListViewAnimaionManager.js";

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
        <div class="view-page-btn left"><</div>
        <div class="view-page-btn right">></div>
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
      btnState,
      currentCategoryData,
      subscribeStatus,
    } = this._state;
    const { subscribePress, pressCategories } = this.props;
    const { moveToTargetCategoryBy, initProgressBarAnimation } = this;

    new ListViewHeader(listViewHeader, {
      currentPageInCategory,
      currentCategory,
      currentCategoryTotalPage,
      categoryIds,
      pressCategories,
      btnState,
      moveToTargetCategoryBy: moveToTargetCategoryBy.bind(this),
      initProgressBarAnimation: initProgressBarAnimation.bind(this),
    });

    const listViewMain = this.target.querySelector(".list-view__main");

    new ListViewMain(listViewMain, {
      currentCategoryData,
      subscribeStatus,
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
      btnState,
      allPressSubscribeStatus,
    } = listViewData;

    const categoryIds =
      btnState === "all-press"
        ? listUpCategoryIds(pressData)
        : listUpPressName(pressData);
    const sortedPressData = this.sortPressDataByCategoryId(
      categoryIds,
      pressData,
      btnState
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
        btnState === "all-press"
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
    const targetPressSubscribeStatus =
      allPressSubscribeStatus[nextPageInAllCategories - 1];

    return {
      currentPageInAllCategories: nextPageInAllCategories,
      currentPageInCategory: nextPageInCategory,
      currentCategory: nextCategory,
      currentCategoryTotalPage: nextCategoryTotalPage,
      categoryIds,
      currentCategoryData: nextCategoryData,
      pressData,
      btnState,
      subscribeStatus: targetPressSubscribeStatus,
      allPressSubscribeStatus,
    };
  }

  sortPressDataByCategoryId(categoryIds, pressData, btnState) {
    const sortedPressData = {};

    categoryIds.forEach((id) => (sortedPressData[id] = []));
    pressData.forEach((press) => {
      if (btnState === "all-press") {
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
    let currentPage = 0;
    if (targetCategory) {
      for (const [key, value] of Object.entries(categoryLengths)) {
        if (key === targetCategory) {
          currentPage += FIRST_PAGE;
          return currentPage;
        }
        currentPage += value;
      }
    } else {
      currentPage += FIRST_PAGE;
      return currentPage;
    }
  }

  moveToTargetCategoryBy(targetCategory, btnState) {
    const { pressData, allPressSubscribeStatus } = this._state;

    this.setState(
      this.getCurrentListViewState({
        pressData,
        allPressSubscribeStatus,
        btnState,
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

import { Component } from "../../../core/Component.js";
import { listUpCategoryIds, listUpPressName } from "../../../utils/utils.js";
import { ListViewHeader } from "./ListViewHeader.js";
import { ListViewMain } from "./ListViewMain.js";

export class ListView extends Component {
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
        this.setState(this.getCurrentListViewState(this._state, dir));
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
    const { subscribePress } = this.props;

    new ListViewHeader(listViewHeader, {
      currentPageInCategory: currentPageInCategory,
      currentCategory: currentCategory,
      currentCategoryTotalPage: currentCategoryTotalPage,
      categoryIds: categoryIds,
      btnState: btnState,
    });

    const listViewMain = this.target.querySelector(".list-view__main");

    new ListViewMain(listViewMain, {
      currentCategoryData: currentCategoryData,
      subscribeStatus: subscribeStatus,
      subscribePress: subscribePress,
    });
  }

  getCurrentListViewState(listViewData, dir) {
    const FIRST_PAGE = 1;
    let {
      currentPageInAllCategories,
      currentPageInCategory,
      currentCategory,
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

    let nextPageInAllCategories = currentPageInAllCategories
      ? this.setPageNumberBy(dir, currentPageInAllCategories)
      : FIRST_PAGE;

    if (nextPageInAllCategories > LAST_PAGE) {
      nextPageInAllCategories = FIRST_PAGE;
    } else if (nextPageInAllCategories < FIRST_PAGE) {
      nextPageInAllCategories = LAST_PAGE;
    }

    const nextCategory =
      btnState === "all-press"
        ? allPressContents[nextPageInAllCategories - 1].category_id
        : allPressContents[nextPageInAllCategories - 1].name;
    const nextCategoryTotalPage = categoryLengths[nextCategory];
    let nextPageInCategory =
      currentCategory !== nextCategory || !currentPageInCategory
        ? dir === "right" || dir === undefined
          ? FIRST_PAGE
          : nextCategoryTotalPage
        : this.setPageNumberBy(dir, currentPageInCategory);

    const nextCategoryData = allPressContents[nextPageInAllCategories - 1];
    const targetPressSubscribeStatus =
      allPressSubscribeStatus[nextPageInAllCategories - 1];

    return {
      currentPageInAllCategories: nextPageInAllCategories,
      currentPageInCategory: nextPageInCategory,
      currentCategory: nextCategory,
      currentCategoryTotalPage: nextCategoryTotalPage,
      categoryIds: categoryIds,
      currentCategoryData: nextCategoryData,
      pressData: pressData,
      btnState: btnState,
      subscribeStatus: targetPressSubscribeStatus,
      allPressSubscribeStatus: allPressSubscribeStatus,
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

  setPageNumberBy(dir, page) {
    return dir === "right" ? (page += 1) : (page -= 1);
  }

  getLastPage(allPressContents) {
    return allPressContents.length;
  }
}

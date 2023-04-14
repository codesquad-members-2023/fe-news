import { Component } from "../../../core/Component.js";
import { listUpCategoryIds, listUpPressName } from "../../../utils/utils.js";
import { ListViewHeader } from "./ListViewHeader.js";
import { ListViewMain } from "./ListViewMain.js";

export class ListView extends Component {
  setUp() {
    this._state = this.getCurrentListViewData(this.props);
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

  getCurrentListViewData(listViewData) {
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

    const nextPageInAllCategories = currentPageInAllCategories
      ? currentPageInAllCategories
      : 1;
    const nextCategory =
      btnState === "all-press"
        ? allPressContents[nextPageInAllCategories - 1].category_id
        : allPressContents[nextPageInAllCategories - 1].name;
    const nextPageInCategory =
      currentCategory != nextCategory && !currentPageInCategory
        ? 1
        : currentPageInCategory;
    const nextCategoryData = allPressContents[nextPageInAllCategories - 1];
    const nextCategoryTotalPage = categoryLengths[nextCategory];
    const targetPressSubscribeStatus =
      allPressSubscribeStatus[nextPageInAllCategories - 1];

    return {
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
}

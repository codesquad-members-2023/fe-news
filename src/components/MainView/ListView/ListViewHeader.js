import { Component } from "../../../core/Component.js";

export class ListViewHeader extends Component {
  templete() {
    const {
      currentPageInCategory,
      currentCategory,
      currentCategoryTotalPage,
      categoryIds,
      pressCategories,
      btnState,
    } = this.props;

    const headCategoryNodes =
      btnState === "all-press"
        ? this.getAllPressCategoryHeader(
            categoryIds,
            currentCategory,
            currentPageInCategory,
            currentCategoryTotalPage,
            pressCategories
          )
        : this.getSubscribePressCategoryHeader(categoryIds, currentCategory);

    return `${headCategoryNodes}`;
  }

  getAllPressCategoryHeader(
    categoryIds,
    currentCategory,
    currentPageInCategory,
    currentCategoryTotalPage,
    pressCategories
  ) {
    return categoryIds.reduce((acc, category) => {
      if (category === currentCategory) {
        return (
          acc +
          `
      <div class="list-view__current-category">
        <div class="current-category">${pressCategories[0][category]}</div>
        <div class="current-page">${currentPageInCategory}/${currentCategoryTotalPage}</div>
      </div>`
        );
      } else {
        return (
          acc +
          `<div class="list-view__category">${pressCategories[0][category]}</div>`
        );
      }
    }, "");
  }

  getSubscribePressCategoryHeader(categoryIds, currentCategory) {
    return categoryIds.reduce((acc, name) => {
      if (name === currentCategory) {
        return (
          acc +
          `
      <div class="list-view__current-category">
        <div class="current-category">${name}</div>
        <div class="category-direction">></div>
      </div>`
        );
      } else {
        return acc + `<div class="list-view__category">${name}</div>`;
      }
    }, "");
  }
}

import { Component } from "../../../core/Component.js";
import { ALL_PRESSES } from "../../../constants/index.js";

export class ListViewHeader extends Component {
  templete() {
    const {
      currentPageInCategory,
      currentCategory,
      currentCategoryTotalPage,
      categoryIds,
      pressCategories,
      filterBtnState,
    } = this.props;

    const headCategoryNodes =
      filterBtnState === ALL_PRESSES
        ? this.getAllPressCategoryNodes(
            categoryIds,
            currentCategory,
            currentPageInCategory,
            currentCategoryTotalPage,
            pressCategories
          )
        : this.getSubscribePressCategoryNodes(categoryIds, currentCategory);

    return `${headCategoryNodes}`;
  }

  setEvent() {
    this.target.addEventListener(
      "click",
      ({ target: { tagName, dataset } }) => {
        if (tagName !== "A") return;
        const { moveToTargetCategoryBy, filterBtnState } = this.props;
        const categoryId = dataset.categoryId;
        moveToTargetCategoryBy(categoryId, filterBtnState);
      }
    );
  }

  getAllPressCategoryNodes(
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
        <a class="current-category" data-category-id="${category}">${pressCategories[0][category]}</a>
        <div class="current-page">${currentPageInCategory}/${currentCategoryTotalPage}</div>
      </div>`
        );
      } else {
        return (
          acc +
          `<a class="list-view__category" data-category-id="${category}">${pressCategories[0][category]}</a>`
        );
      }
    }, "");
  }

  getSubscribePressCategoryNodes(categoryIds, currentCategory) {
    return categoryIds.reduce((acc, name) => {
      if (name === currentCategory) {
        return (
          acc +
          `
      <div class="list-view__current-category">
        <a class="current-category" data-category-id="${name}">${name}</a>
        <div class="category-direction">></div>
      </div>`
        );
      } else {
        return (
          acc +
          `<a class="list-view__category" data-category-id="${name}">${name}</a>`
        );
      }
    }, "");
  }
}

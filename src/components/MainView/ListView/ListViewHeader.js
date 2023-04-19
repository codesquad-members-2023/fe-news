import { Component } from "../../../core/Component.js";

export class ListViewHeader extends Component {
  template() {
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

  setEvent() {
    this.target.addEventListener(
      "click",
      ({ target: { tagName, dataset } }) => {
        if (tagName !== "A") return;
        const { moveToTargetCategoryBy, btnState } = this.props;
        const categoryId = dataset.categoryId;
        moveToTargetCategoryBy(categoryId, btnState);
      }
    );
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

  getSubscribePressCategoryHeader(categoryIds, currentCategory) {
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

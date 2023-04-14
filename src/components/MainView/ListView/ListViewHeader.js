import { Component } from "../../../core/Component.js";

export class ListViewHeader extends Component {
  templete() {
    const {
      currentPageInCategory,
      currentCategory,
      currentCategoryTotalPage,
      categoryIds,
      btnState,
    } = this.props;

    const headCategoryNodes =
      btnState === "all-press"
        ? categoryIds.reduce((acc, category) => {
            if (category === currentCategory) {
              return (
                acc +
                `
            <div class="list-view__current-category">
              <div class="current-category">${category}</div>
              <div class="current-page">${currentPageInCategory}/${currentCategoryTotalPage}</div>
            </div>`
              );
            } else {
              return acc + `<div class="list-view__category">${category}</div>`;
            }
          }, "")
        : categoryIds.reduce((acc, name) => {
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

    return `
      ${headCategoryNodes}
    `;
  }
}

import Component from "../../../core/Component.js";

export default class AllTab extends Component {
  template() {
    const { selectedPress, categoryIndex, categoryLength, categories } =
      this.props;

    if (!selectedPress) return;

    const categoriesHtml = categories.reduce((categoriesString, category) => {
      const categoryId = category;
      const isSelected = categoryId === selectedPress.category_id;

      return (
        categoriesString +
        `
          <div>
            <span class=${
              isSelected ? "selected-category" : ""
            } >${categoryId}</span>

            ${
              isSelected
                ? `<span>${categoryIndex + 1}/${categoryLength}</span>`
                : ""
            }
          </div>
          `
      );
    }, "");

    return `${categoriesHtml}`;
  }
}

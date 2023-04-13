import Component from "../../../core/Component.js";

export default class AllTab extends Component {
  template() {
    const { press, categories } = this.props;

    const selectedCategory = categories.filter(
      (category) => category.categoryId === press.category_id
    )[0];

    const idx =
      selectedCategory?.newses.findIndex((news) => news === press) + 1;

    const categoryLength = selectedCategory?.newses.length;

    const categoriesHtml = categories.reduce((categoriesString, category) => {
      const { categoryId } = category;
      const isSelected = categoryId === press.category_id;

      return (
        categoriesString +
        `
        <div>
          <span class=${
            isSelected ? "selected-category" : ""
          } >${categoryId}</span>

          ${isSelected ? `<span>${idx}/${categoryLength}</span>` : ""}
        </div>
        `
      );
    }, "");

    return `${categoriesHtml}`;
  }
}

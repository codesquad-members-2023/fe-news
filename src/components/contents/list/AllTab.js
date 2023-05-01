import Component from "../../../core/Component.js";
import Category from "./Category.js";

export default class AllTab extends Component {
  template() {
    const { categories } = this.props;
    return categories.map((_) => `<div class="tab"></div>`).join("");
  }

  renderChildComponents() {
    const { selectedPress, categoryIndex, categoryLength, categories } =
      this.props;
    if (!selectedPress) return;

    const containers = document.querySelectorAll(".tab");
    containers.forEach((container, index) => {
      new Category(container, {
        selectedPress,
        categoryIndex,
        categoryLength,
        categoryId: categories[index],
      });
    });
  }
}

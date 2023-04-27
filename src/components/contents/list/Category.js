import Component from "../../../core/Component.js";
import { setCategoryIdx, store } from "../../../store/store.js";

export default class Category extends Component {
  setEvent() {
    const { categoryId } = this.props;
    const handleCategoryClick = () => {
      store.dispatch(setCategoryIdx(categoryId));
    };
    this.addEvent("click", ".category", handleCategoryClick);
  }

  template() {
    const { selectedPress, categoryIndex, categoryLength, categoryId } =
      this.props;

    const isSelected = categoryId === selectedPress.category_id;

    return `
    <div>
        <span class=${
          isSelected ? "selected-category" : ""
        } category>${categoryId}</span>
        ${
          isSelected
            ? `<span>${categoryIndex + 1}/${categoryLength}</span>`
            : ""
        }
    </div>
    `;
  }
}

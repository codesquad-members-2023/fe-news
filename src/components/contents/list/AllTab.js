import Component from "../../../core/Component.js";
import { store } from "../../../store/store.js";

export default class AllTab extends Component {
  template() {
    const {
      contents: { presses },
      listView: { index },
    } = store.getState();

    if (!presses.length) return;

    const sortedPresses = presses.sort((a, b) =>
      a.category_id < b.category_id ? -1 : 1
    );
    const categories = sortedPresses.map((category) => category.category_id);

    // const categories = new Set(presses.map((press) => press.category_id));
    // const press = presses[index];
    // const selectedCategory = [...categories]
    //   .filter((category) => category === press.category_id)
    //   .shift();

    // // const idx =
    // //   selectedCategory?.newses.findIndex((news) => news === press) + 1;

    // const categoryLength = selectedCategory.newses.length;

    // const categoriesHtml = categories.reduce((categoriesString, category) => {
    //   const { categoryId } = category;
    //   const isSelected = categoryId === press.category_id;

    //   return (
    //     categoriesString +
    //     `
    //     <div>
    //       <span class=${
    //         isSelected ? "selected-category" : ""
    //       } >${categoryId}</span>

    //       ${isSelected ? `<span>${idx}/${categoryLength}</span>` : ""}
    //     </div>
    //     `
    //   );
    // }, "");

    // return `${categoriesHtml}`;
  }
}

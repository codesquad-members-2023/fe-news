import Component from "../../../core/Component.js";
import { setViewGrid, setViewList, store } from "../../../store/store.js";

export default class StyleMenu extends Component {
  setEvent() {
    this.addEvent("click", ".list-icon", () => {
      store.dispatch(setViewList());
    });
    this.addEvent("click", ".grid-icon", () => {
      store.dispatch(setViewGrid());
    });
  }

  template() {
    const {
      contents: { viewOption },
    } = store.getState();

    return `
    <img class="list-icon ${
      viewOption === "list" ? "blue" : ""
    }" src="../../assets/icons/list-view.svg" alt="list view icon" /> 
    <img class="grid-icon ${
      viewOption === "grid" ? "blue" : ""
    } " src="../../assets/icons/grid-view.svg" alt="grid view icon" />
    `;
  }
}

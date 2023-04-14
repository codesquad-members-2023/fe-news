import { Component } from "../../../core/Component.js";

export class ViewBtns extends Component {
  templete() {
    const { viewState } = this.props;
    const listColor = viewState === "list" ? "blue" : "gray";
    const gridColor = listColor === "blue" ? "gray" : "blue";

    return `
      <img class="main__btn list ${listColor}" src="src/images/list_btn_${listColor}.svg" alt="" />
      <img class="main__btn grid ${gridColor}" src="src/images/grid_btn_${gridColor}.svg" alt="" />
    `;
  }

  setEvent() {
    const { changeViewState } = this.props;

    this.target.addEventListener("click", ({ target: { className } }) => {
      const [imgName, viewState, color] = className.split(" ");
      changeViewState(viewState);
    });
  }
}

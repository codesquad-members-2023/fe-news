import { Component } from "../../../core/Component.js";
import blueListBtn from "../../../images/list_btn_blue.svg";
import grayListBtn from "../../../images/list_btn_gray.svg";
import blueGridBtn from "../../../images/grid_btn_blue.svg";
import grayGridBtn from "../../../images/grid_btn_gray.svg";
import { GRID, LIST } from "../../../constants/index.js";

export class ViewBtns extends Component {
<<<<<<< HEAD
  templete() {
    const { viewBtnState } = this.props;
    const listBtn = viewBtnState === LIST ? blueListBtn : grayListBtn;
    const gridBtn = viewBtnState === GRID ? blueGridBtn : grayGridBtn;
=======
  template() {
    const { viewState } = this.props;
    const listColor = viewState === "list" ? "blue" : "gray";
    const gridColor = listColor === "blue" ? "gray" : "blue";
>>>>>>> w03/mid

    return `
      <img class="main__btn list" src="${listBtn}" alt="" />
      <img class="main__btn grid" src="${gridBtn}" alt="" />
    `;
  }

  setEvent() {
    const { changeViewBtnState } = this.props;

    this.target.addEventListener("click", ({ target: { className } }) => {
      const [_imgName, viewBtnState] = className.split(" ");
      changeViewBtnState(viewBtnState);
    });
  }
}

import { Component } from "../../../core/Component.js";
import blueListBtn from "../../../images/list_btn_blue.svg";
import grayListBtn from "../../../images/list_btn_gray.svg";
import blueGridBtn from "../../../images/grid_btn_blue.svg";
import grayGridBtn from "../../../images/grid_btn_gray.svg";

export class ViewBtns extends Component {
  templete() {
    const { viewState } = this.props;
    const listBtn = viewState === "list" ? blueListBtn : grayListBtn;
    const gridBtn = viewState === "grid" ? blueGridBtn : grayGridBtn;

    return `
      <img class="main__btn list" src="${listBtn}" alt="" />
      <img class="main__btn grid" src="${gridBtn}" alt="" />
    `;
  }

  setEvent() {
    const { changeViewState } = this.props;

    this.target.addEventListener("click", ({ target: { className } }) => {
      const [imgName, viewState] = className.split(" ");
      changeViewState(viewState);
    });
  }
}

import { Component } from "../../../core/Component.js";

export class FilterBtns extends Component {
  templete() {
    const { btnState } = this.props;
    return `
      <div class="main__btn all-press ${
        btnState === "all-press" ? "clicked" : "unclicked"
      }">전체 언론사</div>
      <div class="main__btn subscribed-press ${
        btnState === "subscribed-press" ? "clicked" : "unclicked"
      }">내가 구독한 언론사</div>
      `;
  }

  setEvent() {
    this.target.addEventListener("click", ({ target: { className } }) => {
      const [elementName, btnStatus, type] = className.split(" ");
      const { changeBtnState, changeViewState } = this.props;

      changeBtnState(btnStatus);

      const viewStatus = btnStatus === "all-press" ? "grid" : "list";

      changeViewState(viewStatus);
    });
  }
}

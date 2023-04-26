import {
  ALL_PRESSES,
  GRID,
  LIST,
  SUBSCRIBED_PRESSES,
} from "../../../constants/index.js";
import { Component } from "../../../core/Component.js";

export class FilterBtns extends Component {
<<<<<<< HEAD
  templete() {
    const { filterBtnState } = this.props;
=======
  template() {
    const { btnState } = this.props;
>>>>>>> w03/mid
    return `
      <div class="main__btn all-press ${
        btnState === "all-press" ? "clicked" : "unclicked"
      }">전체 언론사</div>
      <div class="main__btn subscribed-press ${
        filterBtnState === SUBSCRIBED_PRESSES ? "clicked" : "unclicked"
      }">내가 구독한 언론사</div>
      `;
  }

  setEvent() {
    this.target.addEventListener("click", ({ target: { className } }) => {
      const [_elementName, btnState, _type] = className.split(" ");
      const { changeFilterBtnState, changeViewBtnState } = this.props;

      const filterBtnState = btnState === ALL_PRESSES ? GRID : LIST;

      changeViewBtnState(filterBtnState);
      changeFilterBtnState(btnState);
    });
  }
}

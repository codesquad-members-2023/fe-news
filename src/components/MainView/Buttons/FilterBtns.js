import {
  ALL_PRESSES,
  GRID,
  LIST,
  SUBSCRIBED_PRESSES,
} from "../../../constants/index.js";
import { Component } from "../../../core/Component.js";

export class FilterBtns extends Component {
  template() {
    const { filterBtnState } = this.props;
    return `
      <div class="main__btn all-press ${
        filterBtnState === ALL_PRESSES ? "clicked" : "unclicked"
      }">전체 언론사</div>
      <div class="main__btn subscribed-press ${
        filterBtnState === SUBSCRIBED_PRESSES ? "clicked" : "unclicked"
      }">내가 구독한 언론사</div>
      `;
  }

  setEvent() {
    this.target.addEventListener("click", ({ target: { className } }) => {
      const [elementName, btnState, _type] = className.split(" ");
      if (elementName !== "main__btn") return;
      const filterBtnState = btnState === ALL_PRESSES ? GRID : LIST;

      const { changeFilterBtnState, changeViewBtnState } = this.props;
      changeViewBtnState(filterBtnState);
      changeFilterBtnState(btnState);
    });
  }
}

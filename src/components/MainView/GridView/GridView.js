import { Component } from "../../../core/Component.js";
import { ItemView } from "./ItemView.js";
import { getPageNumberByDir } from "../../../utils/utils.js";
import { NEXT_PAGE_BTN, PREV_PAGE_BTN } from "../../../constants/ui.js";
import subscribeBtn from "../../../images/subscribe_btn.svg";

export class GridView extends Component {
  setUp() {
    const sortedItems = this.getGridViewState(this.props);
    this._state = sortedItems;
  }

  templete() {
    const { ITEM_LIMIT_PER_PAGE } = this.props;
    const { targetPressData, btnDirState } = this._state;

    const btnNodes =
      targetPressData.length > ITEM_LIMIT_PER_PAGE
        ? Object.entries(btnDirState).reduce(
            (acc, [btnDir, btnDirSymbol]) =>
              acc +
              `<div class="view-page-btn ${btnDir}">${btnDirSymbol}</div>`,
            ""
          )
        : "";

    const itemContainers = Array.from(
      { length: ITEM_LIMIT_PER_PAGE },
      (_, index) =>
        `<div class="item__container" data-index-number="${index}"></div>`
    ).join("");

    return `<div class="grid-view">${btnNodes}${itemContainers}</div>`;
  }

  setEvent() {
    this.target.addEventListener("click", ({ target }) => {
      if (target.closest(".view-page-btn")) {
        const [_, dir] = target.closest(".view-page-btn").className.split(" ");
        this.setState(this.getGridViewState(this._state, dir));
      }
    });
  }

  mounted() {
    const { subscribePress } = this.props;
    const { press, targetSubscribeStatus } = this._state;

    press.forEach(({ logo_src }, index) => {
      const itemContainer = this.target.querySelector(
        `[data-index-number="${index}"]`
      );

      const subscribeStatus = targetSubscribeStatus[index];

      new ItemView(itemContainer, {
        pressIcon: logo_src,
        subscribeBtn,
        subscribeStatus,
        subscribePress,
      });
    });
  }

  getGridViewState(pressData, dir) {
    const {
      START_PAGE,
      PAGE_LIMIT,
      ITEM_LIMIT_PER_PAGE,
      currentPageNumber,
      press,
      targetPressData,
      targetPressSubscribeStatus,
    } = pressData;

    const currentPage = currentPageNumber || START_PAGE;
    const originalData = targetPressData || press;
    const nextPageNumber = dir
      ? getPageNumberByDir(dir, currentPage)
      : currentPage;

    const endIndex = nextPageNumber * ITEM_LIMIT_PER_PAGE;
    const firstIndex = endIndex - ITEM_LIMIT_PER_PAGE;
    const sortedItems = originalData.slice(firstIndex, endIndex);
    const btnDirState = this.getBtnDirState(
      START_PAGE,
      PAGE_LIMIT,
      nextPageNumber
    );

    const targetSubscribeStatus = targetPressSubscribeStatus.slice(
      firstIndex,
      endIndex
    );

    return {
      START_PAGE,
      PAGE_LIMIT,
      ITEM_LIMIT_PER_PAGE,
      currentPageNumber: nextPageNumber,
      press: sortedItems,
      targetPressData,
      btnDirState,
      targetPressSubscribeStatus,
      targetSubscribeStatus,
    };
  }

  getBtnDirState(START_PAGE, PAGE_LIMIT, nextPageNumber) {
    let btnDirState;

    if (nextPageNumber === START_PAGE) {
      btnDirState = { right: NEXT_PAGE_BTN };
    } else if (nextPageNumber === PAGE_LIMIT) {
      btnDirState = { left: PREV_PAGE_BTN };
    } else {
      btnDirState = { left: PREV_PAGE_BTN, right: NEXT_PAGE_BTN };
    }

    return btnDirState;
  }
}

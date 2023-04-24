import { Component } from "../../../core/Component.js";
import { GridItem } from "./GridItem.js";
import { getPageNumberByDir } from "../../../utils/utils.js";

export class GridView extends Component {
  setUp() {
    const sortedItems = this.getGridViewState(this.props);
    this._state = sortedItems;
  }

  templete() {
    const { itemLimitPerPage } = this.props;
    const { allPressData, btnDirState } = this._state;

    const btnNodes =
      allPressData.length > itemLimitPerPage
        ? Object.entries(btnDirState).reduce(
            (acc, [btnDir, btnDirSymbol]) =>
              acc +
              `<div class="view-page-btn ${btnDir}">${btnDirSymbol}</div>`,
            ""
          )
        : "";

    const itemContainers = Array.from(
      { length: itemLimitPerPage },
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
      new GridItem(itemContainer, {
        pressIcon: logo_src,
        subscribeBtn: "src/images/subscribe_btn.svg",
        subscribeStatus,
        subscribePress,
      });
    });
  }

  getGridViewState(pressData, dir) {
    const {
      pageLimit,
      itemLimitPerPage,
      currentPageNumber,
      press,
      allPressData,
      allPressSubscribeStatus,
    } = pressData;
    const currentPage = currentPageNumber ? currentPageNumber : 1;
    const originalData = allPressData ? allPressData : press;
    const nextPageNumber = dir
      ? getPageNumberByDir(dir, currentPage)
      : currentPage;
    const endIndex = nextPageNumber * itemLimitPerPage;
    const firstIndex = endIndex - itemLimitPerPage;
    const sortedItems = originalData.slice(firstIndex, endIndex);
    const btnDirState = this.getBtnDirState(pageLimit, nextPageNumber);

    const targetSubscribeStatus = allPressSubscribeStatus.slice(
      firstIndex,
      endIndex
    );

    return {
      pageLimit,
      currentPageNumber: nextPageNumber,
      press: sortedItems,
      allPressData,
      btnDirState,
      itemLimitPerPage,
      allPressSubscribeStatus,
      targetSubscribeStatus,
    };
  }

  getBtnDirState(pageLimit, nextPageNumber) {
    const FIRST_PAGE = 1;
    const LAST_PAGE = pageLimit;
    let btnDirState;

    if (nextPageNumber === FIRST_PAGE) btnDirState = { right: ">" };
    else if (nextPageNumber === LAST_PAGE) btnDirState = { left: "<" };
    else btnDirState = { left: "<", right: ">" };

    return btnDirState;
  }
}

import { Component } from "../../../core/Component.js";
import { GridItem } from "./GridItem.js";
import { getPageNumberBy } from "../../../utils/utils.js";

export class GridView extends Component {
  setUp() {
    const sortedItems = this.getGridViewState(this.props);
    this._state = sortedItems;
  }

  templete() {
    const { itemLimitPerPage } = this.props;
    const { allPressData, btnDir } = this._state;

    const btnNodes =
      allPressData.length > itemLimitPerPage
        ? Object.entries(btnDir).reduce(
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
      btnDir,
      allPressSubscribeStatus,
    } = pressData;
    const currentPage = currentPageNumber ? currentPageNumber : 1;
    const originalData = allPressData ? allPressData : press;
    const nextPageNumber = dir
      ? getPageNumberBy(dir, currentPage)
      : currentPage;
    const endIndex = nextPageNumber * itemLimitPerPage;
    const firstIndex = endIndex - itemLimitPerPage;
    const sortedItems = originalData.slice(firstIndex, endIndex);
    const btnState = this.getBtnState(pageLimit, nextPageNumber, btnDir);

    const targetSubscribeStatus = allPressSubscribeStatus.slice(
      firstIndex,
      endIndex
    );

    return {
      pageLimit,
      currentPageNumber: nextPageNumber,
      press: sortedItems,
      allPressData,
      btnDir: btnState,
      itemLimitPerPage,
      allPressSubscribeStatus,
      targetSubscribeStatus,
    };
  }

  getBtnState(pageLimit, nextPageNumber, btnDir) {
    const FIRST_PAGE = 1;
    const LAST_PAGE = pageLimit;

    if (nextPageNumber === FIRST_PAGE) btnDir = { right: ">" };
    else if (nextPageNumber === LAST_PAGE) btnDir = { left: "<" };
    else btnDir = { left: "<", right: ">" };

    return btnDir;
  }
}

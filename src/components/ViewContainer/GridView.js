import { Component } from "../../core/Component.js";
import { GridItem } from "./GridItem.js";

export class GridView extends Component {
  setUp() {
    const sortedItems = this.getGridViewState(this.props);
    this._state = sortedItems;
  }

  templete() {
    const { pageItemLimit } = this.props;
    const { originalData, btnDir } = this._state;

    const btnNodes =
      originalData.length > pageItemLimit
        ? btnDir.reduce(
            (acc, btnDir) =>
              acc +
              `
          <div class="view-page-btn ${btnDir}">
            <img src="src/images/lg_${btnDir}_dir_btn.svg" alt="" />
          </div>
        `,
            ""
          )
        : "";

    const itemContainers = Array.from(
      { length: pageItemLimit },
      (_, index) =>
        `<div class="item__container" data-index-number="${index}"></div>`
    ).join("");

    return `${btnNodes}${itemContainers}`;
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
        subscribeStatus: subscribeStatus,
        subscribePress: subscribePress,
      });
    });
  }

  getGridViewState(pressData, dir) {
    let { page, press, originalData, btnDir, pageItemLimit, subscribeStatus } =
      pressData;

    const data = originalData ? originalData : press;
    const nextPageNumber = dir ? this.setPageNumberBy(dir, page) : page;
    const endIndex = nextPageNumber * pageItemLimit;
    const firstIndex = endIndex - pageItemLimit;
    const sortedItems = data.slice(firstIndex, endIndex);
    const btnState = this.getBtnState(nextPageNumber, btnDir);
    const subscribedPress = [];

    const targetSubscribeStatus = subscribeStatus.slice(firstIndex, endIndex);

    return {
      page: nextPageNumber,
      press: sortedItems,
      originalData: data,
      btnDir: btnState,
      subscribedPress: subscribedPress,
      pageItemLimit: pageItemLimit,
      subscribeStatus: subscribeStatus,
      targetSubscribeStatus: targetSubscribeStatus,
    };
  }

  setPageNumberBy(dir, page) {
    const result = dir === "right" ? (page += 1) : (page -= 1);
    return result;
  }

  getBtnState(nextPageNumber, btnDir) {
    // 하드코딩? 수정 고민 필요
    if (nextPageNumber === 1) btnDir = ["right"];
    else if (nextPageNumber === 4) btnDir = ["left"];
    else btnDir = ["left", "right"];
    return btnDir;
  }
}

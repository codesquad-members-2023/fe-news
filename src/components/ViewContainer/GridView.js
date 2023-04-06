import { Component } from "../../core/Component.js";
// import { SubScribeBtn } from "./SubscribeBtn.js";

export class GridView extends Component {
  setUp() {
    const sortedItems = this.getGridViewState(this.props);
    this._state = sortedItems;
  }

  templete() {
    return `
      <div class="main__header">
        <div class="main__btn all-data">전체 언론사</div>
        <div class="main__btn subscribed-data">내가 구독한 언론사</div>
        <img src="src/images/list_btn.svg" alt="" />
        <img src="src/images/grid_btn.svg" alt="" />
      </div>
      <div class="view__container">
        ${this._state.btnDir.reduce(
          (acc, btnDir) =>
            acc +
            `
              <div class="view-page-btn ${btnDir}">
                <img src="src/images/lg_${btnDir}_dir_btn.svg" alt="" />
              </div>
            `,
          ""
        )}
        ${this._state.press.reduce(
          (acc, { logo_src }) =>
            acc +
            `
              <div class="view__item">
                <img src="${logo_src}" alt="" />
              </div>
            `,
          ""
        )}
      </div>
    `;
  }

  setEvent() {
    this.target.addEventListener("click", ({ target }) => {
      if (target.closest(".view-page-btn")) {
        const [_, dir] = target.closest(".view-page-btn").className.split(" ");
        this.setState(this.getGridViewState(this._state, dir));
      }
    });

    this.target.addEventListener("mouseover", ({ target }) => {
      const item = target.closest(".view__item");
      console.log(item);
    });
  }

  // mounted() {
  //   const viewContainer = this.target.querySelector(".view__container");
  //   console.log(viewContainer);
  //   new SubScribeBtn(viewContainer, this._state);
  // }

  getGridViewState(pressData, dir) {
    let { page, press, originalData, btnDir } = pressData;
    const data = originalData ? originalData : press;

    const nextPageNumber = dir ? this.setPageNumberBy(dir, page) : page;
    const PAGE_ITEM_LIMIT = 24;
    const endIndex = nextPageNumber * PAGE_ITEM_LIMIT;
    const firstIndex = endIndex - PAGE_ITEM_LIMIT;
    const sortedItems = data.slice(firstIndex, endIndex);

    const btnState = this.getBtnState(nextPageNumber, btnDir);

    return {
      page: nextPageNumber,
      press: sortedItems,
      originalData: data,
      btnDir: btnState,
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

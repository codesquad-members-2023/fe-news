import Component from "../../../core/Component.js";
import { setGridPageNum, store } from "../../../store/store.js";
import LeftButton from "../button/LeftButton.js";
import RightButton from "../button/RightButton.js";
import Logo from "./Logo.js";

const LOGOS_NUM_PER_PAGE = 24;
const MAX_PAGE_NUM = 4;
const INITIAL_PAGE_NUM = 0;

const LEFT = -1;
const RIGHT = 1;

export default class GridView extends Component {
  setEvent() {
    const handleButtonClick = ({ target }) => {
      if (!target.closest(".button")) return;

      const {
        gridView: { pageNum },
      } = store.getState();
      const direction = target.closest(".button--left") ? LEFT : RIGHT;

      store.dispatch(
        setGridPageNum((pageNum + direction + MAX_PAGE_NUM) % MAX_PAGE_NUM)
      );
    };

    this.addEvent("click", ".news-list__grid", handleButtonClick);
  }

  template() {
    const cellContainers = [...new Array(LOGOS_NUM_PER_PAGE)]
      .map((_) => `<li class="news-list__item"></li>`)
      .join("");

    return `
       <ul class="news-list__grid">
          <div class="button button--left"></div>
          <div class="button button--right"></div>
          ${cellContainers}
        </ul>
          `;
  }

  renderChildComponents() {
    const {
      contents: { presses, subscribingPresses },
      gridView: { pageNum },
      contents: { subscriptionOption },
    } = store.getState();

    const selectedPresses =
      subscriptionOption === "all"
        ? presses
        : subscribingPresses?.map((subscribingPress) =>
            presses.find((press) => press.name === subscribingPress)
          );

    if (!selectedPresses) return;
    const isFirstPage = pageNum === INITIAL_PAGE_NUM;
    const isLastPage = pageNum === MAX_PAGE_NUM - 1;

    const leftButton = this.parentElement.querySelector(".button--left");
    const rightButton = this.parentElement.querySelector(".button--right");
    !isFirstPage && new LeftButton(leftButton);
    !isLastPage && new RightButton(rightButton);

    const cellContainers =
      this.parentElement.querySelectorAll(".news-list__item");
    const startIdx = pageNum * LOGOS_NUM_PER_PAGE;
    const endIdx = startIdx + LOGOS_NUM_PER_PAGE;
    const singleSlidePresses = selectedPresses.slice(startIdx, endIdx);

    singleSlidePresses.forEach((press, idx) => {
      const { logo_src, name } = press;

      new Logo(cellContainers[idx], {
        name,
        logo_src,
      });
    });
  }
}

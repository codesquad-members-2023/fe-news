import Component from "../../../core/Component.js";
import LeftButton from "../button/LeftButton.js";
import RightButton from "../button/RightButton.js";
import Logo from "./Logo.js";

const LOGOS_NUM_PER_PAGE = 24;
const MAX_PAGE_NUM = 4;
const INITIAL_PAGE_NUM = 0;

const LEFT = -1;
const RIGHT = 1;

export default class GridView extends Component {
  // 상수 빼기
  setup() {
    const { presses, subscribingPresses, subscriptionOption } = this.props;

    let selectedPresses =
      subscriptionOption === "all"
        ? presses
        : subscribingPresses.map((subscribingPress) =>
            presses.find((press) => press.name === subscribingPress)
          );

    if (subscriptionOption === "all") {
      selectedPresses = selectedPresses.slice(
        0,
        LOGOS_NUM_PER_PAGE * MAX_PAGE_NUM
      );
    }

    this.state = {
      presses: selectedPresses,
      pageNum: INITIAL_PAGE_NUM,
    };
  }

  setEvent() {
    const handleButtonClick = ({ target }) => {
      if (!target.closest(".button")) return;

      const { pageNum } = this.state;
      const direction = target.closest(".button--left") ? LEFT : RIGHT;
      this.setState({
        pageNum: (pageNum + direction + MAX_PAGE_NUM) % MAX_PAGE_NUM,
      });
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
    const { pageNum, presses } = this.state;

    const isFirstPage = pageNum === INITIAL_PAGE_NUM;
    const isLastPage =
      pageNum === Math.ceil(presses.length / LOGOS_NUM_PER_PAGE) - 1 ||
      Math.ceil(presses.length / LOGOS_NUM_PER_PAGE) === 0;
    const leftButton = this.parentElement.querySelector(".button--left");
    const rightButton = this.parentElement.querySelector(".button--right");

    isFirstPage ? null : new LeftButton(leftButton);
    isLastPage ? null : new RightButton(rightButton);

    const cellContainers =
      this.parentElement.querySelectorAll(".news-list__item");
    const startIdx = pageNum * LOGOS_NUM_PER_PAGE;
    const endIdx = startIdx + LOGOS_NUM_PER_PAGE;
    const singleSlidePresses = presses.slice(startIdx, endIdx);

    singleSlidePresses.forEach((press, idx) => {
      const src = press?.logo_src;
      const name = press?.name;

      const {
        addSubscribing,
        removeSubscribing,
        subscribingPresses,
        subscriptionOption,
      } = this.props;

      new Logo(cellContainers[idx], {
        name,
        src,
        addSubscribing,
        removeSubscribing,
        subscribingPresses,
        subscriptionOption,
      });
    });
  }
}

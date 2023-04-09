import Component from "../core/Component.js";
import Cell from "./Cell.js";
import Tab from "./Tab.js";
import Viewer from "./Viewer.js";

const LOGOS_NUM_PER_PAGE = 24;
const MAX_PAGE_NUM = 4;
const INITIAL_PAGE_NUM = 0;

const LEFT = -1;
const RIGHT = 1;

export default class OptionListContainer extends Component {
  setup() {
    this.state = {
      presses: [],
      pageNum: INITIAL_PAGE_NUM,
    };
  }

  setEvent() {
    this.addEvent("click", ".news-list__grid", ({ target }) => {
      if (!target.closest(".news-list__button")) return;

      const direction = target.closest(".news-list__button--left")
        ? LEFT
        : RIGHT;

      this.setState({
        pageNum: (this.state.pageNum + direction + MAX_PAGE_NUM) % MAX_PAGE_NUM,
      });
    });
  }

  async componentDidMount() {
    try {
      // url 빼기
      // data fetching 하는 과정 util 함수로 빼기
      const res = await fetch("http://localhost:3001/presses");
      const data = await res.json();

      if (!res.ok) throw new Error(`${data.message} (${res.status})`);

      const randomPresses = data.sort(() => Math.random() - 0.5);
      const selectedPresses = randomPresses.slice(
        0,
        LOGOS_NUM_PER_PAGE * MAX_PAGE_NUM
      );

      this.setState({ presses: selectedPresses });
    } catch (e) {
      console.log(e);
    }
  }

  renderChildComponents() {
    const tabContainers = this.parentElement.querySelector(".view-option__tab");
    new Tab(tabContainers);

    const viewerContainers = this.parentElement.querySelector(
      ".view-option__viewer"
    );
    new Viewer(viewerContainers);

    const cellContainers =
      this.parentElement.querySelectorAll(".news-list__item");
    const startIdx = this.state.pageNum * LOGOS_NUM_PER_PAGE;
    const endIdx = startIdx + LOGOS_NUM_PER_PAGE;
    const singleSlidePresses = this.state.presses.slice(startIdx, endIdx);

    cellContainers.forEach((cellContainer, idx) => {
      const src = singleSlidePresses[idx]?.logo_src;
      const name = singleSlidePresses[idx]?.name;

      const { addSubscribing, removeSubscribing, subscribingPresses } =
        this.props;

      new Cell(cellContainer, {
        src,
        name,
        addSubscribing,
        removeSubscribing,
        subscribingPresses,
      });
    });
  }

  template() {
    const cellContainers = [...new Array(LOGOS_NUM_PER_PAGE)]
      .map((_) => `<li class="news-list__item"></li>`)
      .join("");

    const leftButtonHtml = `
    <img
      src="assets/icons/leftButton.svg"
      alt="left button icon"
      class="news-list__button news-list__button--left"
    />`;

    const rightButtonHtml = `
    <img
    src="assets/icons/rightButton.svg"
    alt="right button icon"
    class="news-list__button news-list__button--right"
  />`;

    const isFirstPage = this.state.pageNum === INITIAL_PAGE_NUM;

    const isLastPage =
      this.state.pageNum ===
      Math.ceil(this.state.presses.length / LOGOS_NUM_PER_PAGE) - 1;

    return `
      <div class="view-option">
         <div class="view-option__tab">
         </div>
         <div class="view-option__viewer"> 
         </div>
       </div>

       <ul class="news-list__grid">
          ${isFirstPage ? "" : leftButtonHtml}
          ${isLastPage ? "" : rightButtonHtml}
          ${cellContainers}
        </ul>
          `;
  }
}

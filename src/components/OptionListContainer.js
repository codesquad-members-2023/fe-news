import Component from "../core/Component.js";
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

  template() {
    const startIdx = this.state.pageNum * LOGOS_NUM_PER_PAGE;
    const endIdx = startIdx + LOGOS_NUM_PER_PAGE;

    const logosHtml = this.state.presses
      .slice(startIdx, endIdx)
      .map(
        (press) =>
          `
    <li class="news-list__item">
      <img class="news-list__image" src=${press.logo_src} />
    </li>`
      )
      .join("");

    return `
      <div class="view-option">
         <div class="view-option__tab">
           <span class="view-option__all">전체 언론사</span>
           <span class="view-option__subscribe">내가 구독한 언론사</span>
         </div>
         <div class="view-option__viewer">
           <img src="assets/icons/list-view.svg" alt="list view icon" />
           <img src="assets/icons/grid-view.svg" alt="grid view icon" />
         </div>
       </div>

       <ul class="news-list__grid">
          <img
            src="assets/icons/leftButton.svg"
            alt="left button icon"
            class="news-list__button news-list__button--left"
          />
          <img
            src="assets/icons/rightButton.svg"
            alt="right button icon"
            class="news-list__button news-list__button--right"
          />
          ${logosHtml}
        </ul>
          `;
  }
}

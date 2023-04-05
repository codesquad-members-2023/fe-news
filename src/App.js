import Component from "./core/Component.js";
import LatestNews from "./components/LatestNews.js";
import OptionListContainer from "./components/OptionListContainer.js";

export default class App extends Component {
  template() {
    return `
    <div class="wrapper">
        <div class="news-stand">
          <div class="news-stand__label">
            <img
              src="assets/icons/newspaper.svg"
              alt="newspaper icon"
              class="news-stand__icon"
            />
            <span>뉴스 스탠드</span>
          </div>
          <span>${this.state.nowTime}</span>
        </div>
      <div class="latest-news"></div>
      <div class="option-list-container"></div>
    </div>`;
  }

  setup() {
    this.state = {
      nowTime: new Date(),
    };
  }

  componentDidMount() {
    // update랑 중복 제거하기
    const latestNews = this.parentElement.querySelector(".latest-news");
    const optionListContainer = this.parentElement.querySelector(
      ".option-list-container"
    );

    new LatestNews(latestNews);
    new OptionListContainer(optionListContainer);
  }

  componentDidUpdate() {
    const latestNews = this.parentElement.querySelector(".latest-news");
    const optionListContainer = this.parentElement.querySelector(
      ".option-list-container"
    );

    new LatestNews(latestNews);
    new OptionListContainer(optionListContainer);
  }
}

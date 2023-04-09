import Component from "./core/Component.js";
import LatestNews from "./components/LatestNews.js";
import OptionListContainer from "./components/OptionListContainer.js";
import {
  SUBSCRIBING_PRESSES_KEY,
  getLocalData,
  setLocalData,
} from "./storage/storageUtils.js";
import Label from "./components/Label.js";

export default class App extends Component {
  setup() {
    let subscribingPresses = getLocalData(SUBSCRIBING_PRESSES_KEY);
    if (!subscribingPresses) subscribingPresses = [];

    this.state = {
      subscribingPresses,
    };
  }

  addSubscribing(press) {
    // remove랑 중복 코드 제거하기
    const newSubscribingPresses = [...this.state.subscribingPresses, press];
    setLocalData(SUBSCRIBING_PRESSES_KEY, newSubscribingPresses);
    this.setState({ subscribingPresses: newSubscribingPresses }, false);
  }

  removeSubscribing(press) {
    const newSubscribingPresses = this.state.subscribingPresses.filter(
      (subscribingPress) => subscribingPress !== press
    );
    setLocalData(SUBSCRIBING_PRESSES_KEY, newSubscribingPresses);
    this.setState({ subscribingPresses: newSubscribingPresses }, false);
  }

  renderChildComponents() {
    const newsStand = this.parentElement.querySelector(".news-stand");
    new Label(newsStand);

    const latestNews = this.parentElement.querySelector(".latest-news");
    new LatestNews(latestNews);

    const optionListContainer = this.parentElement.querySelector(
      ".option-list-container"
    );
    new OptionListContainer(optionListContainer, {
      addSubscribing: this.addSubscribing.bind(this),
      removeSubscribing: this.removeSubscribing.bind(this),
      subscribingPresses: this.state.subscribingPresses,
    });
  }

  template() {
    return `
    <div class="wrapper">
      <div class="news-stand"></div>
      <div class="latest-news"></div>
      <div class="option-list-container"></div>
    </div>`;
  }
}

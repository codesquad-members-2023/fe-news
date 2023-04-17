import Component from "./core/Component.js";
import LatestNews from "./components/latestNews/LatestNews.js";
import Label from "./components/label/Label.js";
import Contents from "./components/contents/Contents.js";

const test = () => `
<div class="wrapper">
  <div class="news-stand"></div>
  <div class="latest-news"></div>
  <div class="contents"></div>
</div>`;

export default class App extends Component {
  template() {
    return test();
  }

  renderChildComponents() {
    const newsStand = this.parentElement.querySelector(".news-stand");
    new Label(newsStand);

    const latestNews = this.parentElement.querySelector(".latest-news");
    new LatestNews(latestNews);

    const contents = this.parentElement.querySelector(".contents");
    new Contents(contents);
  }
}

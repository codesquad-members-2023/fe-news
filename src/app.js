import { Header } from "./components/header.js";
import { TrendNews } from "./components/TrendNews.js";
import { Component } from "./core/Component.js";

export class App extends Component {
  templete() {
    return `
      <div class="newsstand-header"></div>
      <div class="newsstand-trendnews"></div>
      <div class="newsstand-view"></div>
    `;
  }

  mounted() {
    const header = this.target.querySelector(".newsstand-header");
    const trendNews = this.target.querySelector(".newsstand-trendnews");
    const view = this.target.querySelector(".newsstand-view");

    new Header(header);
    new TrendNews(trendNews);
  }
}

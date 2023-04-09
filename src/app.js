import { Header } from "./components/header.js";
import { TrendNews } from "./components/TrendNews.js";
import { GridView } from "./components/ViewContainer/GridView.js";
import { Component } from "./core/Component.js";
import { getPressData } from "./api.js";

export class App extends Component {
  templete() {
    return `
      <div class="newsstand-header"></div>
      <div class="newsstand-trendnews"></div>
      <div class="newsstand-main"></div>
    `;
  }

  async mounted() {
    const header = this.target.querySelector(".newsstand-header");
    const trendNews = this.target.querySelector(".newsstand-trendnews");
    const view = this.target.querySelector(".newsstand-main");

    const pressData = await getPressData();

    new Header(header);
    new TrendNews(trendNews);
    new GridView(view, {
      page: 1,
      press: pressData,
      btnDir: ["left", "right"],
    });
  }
}

import { Header } from "./components/header.js";
import { TrendNews } from "./components/TrendNews.js";
import { ViewContainer } from "./components/ViewContainer/ViewContainer.js";
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
    const mainView = this.target.querySelector(".newsstand-main");

    new Header(header);
    new TrendNews(trendNews);

    const pressData = await getPressData();

    new ViewContainer(mainView, {
      pressData: pressData,
      pageLimit: 4,
      itemLimitPerPage: 24,
      // 빈배열을 props로 주는게 맞는 선택일까?
      subscribedPressSrcs: [],
    });
  }
}

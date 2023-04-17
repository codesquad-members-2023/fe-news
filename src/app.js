import { Header } from "./components/Header/Header.js";
import { TrendNews } from "./components/TrendNews/TrendNews.js";
import { MainView } from "./components/MainView/MainView.js";
import { Component } from "./core/Component.js";
import { getPressData, getPressCategories } from "./api/api.js";
import { suffleData } from "./utils/utils.js";

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

    const [pressData, pressCategories] = await Promise.all([
      getPressData(),
      getPressCategories(),
    ]);
    const suffledPressData = suffleData(pressData);

    new MainView(mainView, {
      pressData: suffledPressData,
      pageLimit: 4,
      itemLimitPerPage: 24,
      // 빈배열을 props로 주는게 맞는 선택일까?
      subscribedPressSrcs: [],
      pressCategories,
    });
  }
}

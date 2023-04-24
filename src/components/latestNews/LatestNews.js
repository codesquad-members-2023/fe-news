import Component from "../../core/Component.js";
import { fetchBreakNewses, fetchHeadNewses, store } from "../../store/store.js";
import LatestNewsBar from "./LatestNewsBar.js";

export default class LatestNews extends Component {
  componentDidMount() {
    store.dispatch(fetchHeadNewses());
    store.dispatch(fetchBreakNewses());
  }

  template() {
    return `
    <div class="latest-news__bar"></div>
    <div class="latest-news__bar"></div>
  `;
  }

  renderChildComponents() {
    const latestNewsBars =
      this.parentElement.querySelectorAll(".latest-news__bar");

    const { headNewses, breakNewses } = store.getState().latestNews;
    new LatestNewsBar(latestNewsBars[0], { newses: headNewses });
    new LatestNewsBar(latestNewsBars[1], { newses: breakNewses });
  }
}

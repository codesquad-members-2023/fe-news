import Component from "../core/Component.js";
import LeftButton from "./LeftButton.js";
import RightButton from "./RightButton.js";
import NewsContent from "./NewsContent.js";
import Tab from "./Tab.js";

export default class ListView extends Component {
  template() {
    return `
        <div class="news-list__list">
            <div class="button button--left"></div>
            <div class="button button--right"></div>
            <div class="button button--left"></div>
            <div class="button button--right"></div>
            <div class="tab-container"></div>
            <div class="news-content"></div>
        </div>
    `;
  }

  renderChildComponents() {
    const leftButton = this.parentElement.querySelector(".button--left");
    new LeftButton(leftButton);

    const rightButton = this.parentElement.querySelector(".button--right");
    new RightButton(rightButton);

    const tabContainer = this.parentElement.querySelector(".tab-container");
    new Tab(tabContainer);

    const newsContent = this.parentElement.querySelector(".news-content");
    new NewsContent(newsContent);
  }
}

import Component from "../../../core/Component.js";
import LeftButton from "../button/LeftButton.js";
import RightButton from "../button/RightButton.js";
import NewsContent from "./NewsContent.js";
import AllTab from "./AllTab.js";
import SubscriptionTab from "./SubscriptionTab.js";
import { setListIdx, store } from "../../../store/store.js";

const LEFT = -1;
const RIGHT = 1;

export default class ListView extends Component {
  setEvent() {
    const handleButtonClick = ({ target }) => {
      if (!target.closest(".button")) return;

      const { idx, sortedPresses } = this.state;
      const direction = target.closest(".button--left") ? LEFT : RIGHT;

      this.setState({
        idx: (idx + direction + sortedPresses.length) % sortedPresses.length,
      });
    };

    this.addEvent("click", ".news-list__list", handleButtonClick);
  }

  template() {
    return `
        <div class="news-list__list">
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

    const {
      contents: { subscriptionOption },
    } = store.getState();

    const tabContainer = this.parentElement.querySelector(".tab-container");
    subscriptionOption === "all"
      ? new AllTab(tabContainer)
      : new SubscriptionTab(tabContainer);

    const newsContent = this.parentElement.querySelector(".news-content");
    new NewsContent(newsContent);
  }
}

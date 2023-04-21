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

      const {
        listView: { index },
        contents: { presses },
      } = store.getState();

      if (!presses.length) return;

      const direction = target.closest(".button--left") ? LEFT : RIGHT;

      const categorizedPresses = presses.sort((a, b) =>
        a.category_id < b.category_id ? -1 : 1
      );

      const nextIndex =
        (index + direction + categorizedPresses.length) %
        categorizedPresses.length;

      store.dispatch(setListIdx(nextIndex));
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
      contents: { subscriptionOption, presses, subscribingPresses },
      listView: { index },
    } = store.getState();

    const categorizedPresses = presses.sort((a, b) =>
      a.category_id < b.category_id ? -1 : 1
    );
    const categories = [
      ...new Set(categorizedPresses.map((press) => press.category_id)),
    ];

    const selectedPresses =
      subscriptionOption === "all"
        ? categorizedPresses
        : subscribingPresses?.map((subscribingPressName) =>
            presses.find((press) => press.name === subscribingPressName)
          );

    const selectedPress = selectedPresses[index];

    if (!selectedPress) return;
    const selectedCategories = presses.filter(
      (press) => press.category_id === selectedPress.category_id
    );

    const categoryLength = selectedCategories.length;
    const categoryIndex = selectedCategories.findIndex(
      (press) => press.name === selectedPress.name
    );

    const tabContainer = this.parentElement.querySelector(".tab-container");
    subscriptionOption === "all"
      ? new AllTab(tabContainer, {
          selectedPress,
          categoryIndex,
          categoryLength,
          categories,
        })
      : new SubscriptionTab(tabContainer, {
          selectedPress,
        });

    const newsContent = this.parentElement.querySelector(".news-content");
    new NewsContent(newsContent, { selectedPress });
  }
}

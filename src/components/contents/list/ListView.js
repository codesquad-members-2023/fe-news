import Component from "../../../core/Component.js";
import LeftButton from "../button/LeftButton.js";
import RightButton from "../button/RightButton.js";
import NewsContent from "./NewsContent.js";
import AllTab from "./AllTab.js";
import SubscriptionTab from "./SubscriptionTab.js";

const LEFT = -1;
const RIGHT = 1;

export default class ListView extends Component {
  initState() {
    const { presses, subscribingPresses, subscriptionOption } = this.props;

    let sortedPresses =
      subscriptionOption === "all"
        ? [...presses].sort((a, b) => (a.category_id < b.category_id ? -1 : 1))
        : subscribingPresses.map((subscribingPress) =>
            presses.find((press) => press.name === subscribingPress)
          );

    const categoriesId = [
      ...new Set(sortedPresses.map((press) => press?.category_id)),
    ];

    const categories = categoriesId.map((categoryId) => {
      return {
        categoryId,
        newses: sortedPresses.filter(
          (press) => press?.category_id === categoryId
        ),
      };
    });

    const idx = 0;

    return {
      idx,
      categories,
      sortedPresses,
    };
  }

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

  setIdx(idx) {
    const { subscribingPresses } = this.props;
    const len = subscribingPresses.length;
    this.setState({ idx: (idx + len) % len });
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

    const { idx, categories, sortedPresses } = this.state;

    const {
      subscribingPresses,
      addSubscribing,
      removeSubscribing,
      subscriptionOption,
    } = this.props;

    const press = sortedPresses[idx];
    const tabContainer = this.parentElement.querySelector(".tab-container");

    subscriptionOption === "all"
      ? new AllTab(tabContainer, {
          press,
          categories,
        })
      : new SubscriptionTab(tabContainer, {
          press,
          categories,
          subscribingPresses,
        });

    const newsContent = this.parentElement.querySelector(".news-content");

    new NewsContent(newsContent, {
      idx,
      setIdx: this.setIdx.bind(this),
      press,
      subscribingPresses,
      subscriptionOption,
      addSubscribing,
      removeSubscribing,
    });
  }
}

import Component from "../../../core/Component.js";
import { store } from "../../../store/store.js";

export default class SubscriptionTab extends Component {
  template() {
    const { subscribingPresses } = store.getState().contents;
    const { selectedPress } = this.props;

    if (!selectedPress) return `구독한 언론사가 없습니다.`;
    const name = selectedPress.name;
    const subscribingPressesHtml = subscribingPresses.reduce(
      (subscribingPressesString, subscribingPress) => {
        const isSelected = name === subscribingPress;
        return (
          subscribingPressesString +
          `
          <div>
            <span class=${isSelected ? "selected-press-name" : ""}>
                ${subscribingPress}
            </span>
          </div>
        `
        );
      },
      ""
    );
    return `${subscribingPressesHtml}`;
  }
}

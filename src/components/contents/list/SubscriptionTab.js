import Component from "../../../core/Component.js";

export default class SubscriptionTab extends Component {
  template() {
    const { press, subscribingPresses } = this.props;
    const name = press?.name;
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

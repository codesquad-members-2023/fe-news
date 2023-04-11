import Component from "../core/Component.js";

export default class SubscriptionMenu extends Component {
  setEvent() {
    const { setSubscriptionAll, setSubscriptionSubscribing } = this.props;

    this.addEvent("click", ".view-option__all", setSubscriptionAll);
    this.addEvent(
      "click",
      ".view-option__subscribe",
      setSubscriptionSubscribing
    );
  }

  template() {
    return `
    <span class="view-option__all">전체 언론사</span>
    <span class="view-option__subscribe">내가 구독한 언론사</span>
    `;
  }
}

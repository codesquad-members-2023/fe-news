import Component from "../../../core/Component.js";
import {
  setSubscriptionAll,
  setSubscriptionSubscribing,
  store,
} from "../../../store/store.js";

export default class SubscriptionMenu extends Component {
  setEvent() {
    this.addEvent("click", ".view-option__all", () => {
      store.dispatch(setSubscriptionAll());
    });
    this.addEvent("click", ".view-option__subscribe", () => {
      store.dispatch(setSubscriptionSubscribing());
    });
  }

  template() {
    return `
    <span class="view-option__all">전체 언론사</span>
    <span class="view-option__subscribe">내가 구독한 언론사</span>
    `;
  }
}

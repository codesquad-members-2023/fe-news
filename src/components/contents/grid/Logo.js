import {
  SUBSCRIBING_PRESSES_KEY,
  setLocalData,
} from "../../../../utils/sotrageManager.js";
import Component from "../../../core/Component.js";
import {
  addSubscribing,
  removeSubscribing,
  store,
} from "../../../store/store.js";

export default class Logo extends Component {
  initState() {
    const { name, subscribingPresses } = this.props;

    const isSubscribing = subscribingPresses?.some(
      (subscribingPress) => subscribingPress === name
    );
    return {
      isSubscribing,
    };
  }

  setEvent() {
    const toggleHidden = ({ target }) => {
      const subscribe = target
        .closest(".news-list__item")
        .querySelector(".subscribe");

      subscribe?.classList.toggle("hidden");
    };

    this.addEvent("mouseenter", ".news-list__item", toggleHidden);
    this.addEvent("mouseleave", ".news-list__item", toggleHidden);

    const toggleSubscribing = ({ target }) => {
      if (!target.closest(".subscribe__button")) return;
      const {
        contents: { subscribingPresses },
      } = store.getState();
      const { name } = this.props;

      const isSubscribing = subscribingPresses.includes(name);

      const actionCreator = isSubscribing ? removeSubscribing : addSubscribing;
      store.dispatch(actionCreator(name));
      setLocalData(SUBSCRIBING_PRESSES_KEY, subscribingPresses);
    };

    this.addEvent("click", ".subscribe", toggleSubscribing);
  }

  template() {
    const { name, logo_src } = this.props;

    const {
      contents: { subscribingPresses },
    } = store.getState();

    const isSubscribing = subscribingPresses.includes(name);
    return `
    <img class="news-list__image" ${logo_src ? `src=${logo_src}` : ""} ${
      name ? `data-name=${name}` : ""
    } />
    <div class="subscribe hidden">
      <button class="subscribe__button">${
        isSubscribing ? "해지하기" : "구독하기"
      }</button>
    </div>`;
  }
}

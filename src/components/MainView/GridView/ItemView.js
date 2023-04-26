import { PRESS_STATUS } from "../../../constants/index.js";
import {
  SUBSCRIBE_BTN_TEXT,
  UNSUBSCRIBE_BTN_TEXT,
} from "../../../constants/ui.js";
import { Component } from "../../../core/Component.js";
import subscribeBtn from "../../../images/subscribe_btn.svg";

export class ItemView extends Component {
  setUp() {
    const { pressIcon, subscribeStatus } = this.props;

    const btnText =
      subscribeStatus === PRESS_STATUS.UNSUBSCRIBED
        ? SUBSCRIBE_BTN_TEXT
        : UNSUBSCRIBE_BTN_TEXT;

    this._state = {
      currentIcon: pressIcon,
      btnText,
      subscribeBtn,
    };
  }

  templete() {
    const { currentIcon, btnText, subscribeBtn } = this._state;
    const itemNode =
      currentIcon === subscribeBtn
        ? `<div class="subscribe-btn">
             <div class="subscribe-text">${btnText}</div>
           </div>`
        : `<div class="press-logo">
             <img src="${currentIcon}" alt="" />
           </div>`;

    return `${itemNode}`;
  }

  setEvent() {
    const { subscribeBtn } = this._state;
    const { pressIcon, subscribePress } = this.props;
    const showSubscribeBtn = () => {
      this.target.classList.add("hovered");
      this.setState({ currentIcon: subscribeBtn });
      this.target.removeEventListener("mouseover", showSubscribeBtn);
    };

    this.target.addEventListener("mouseover", showSubscribeBtn);
    this.target.addEventListener("mouseleave", () => {
      this.target.classList.remove("hovered");
      this.setState({ currentIcon: pressIcon });
      this.target.addEventListener("mouseover", showSubscribeBtn);
    });

    this.target.addEventListener("click", ({ target }) => {
      if (target.closest(".subscribe-btn")) {
        const { btnText } = this._state;
        const btnTextToChange = this.getBtnTextToChange(btnText);
        subscribePress(pressIcon);
        this.setState({
          currentIcon: subscribeBtn,
          btnText: btnTextToChange,
        });
      }
    });
  }

  getBtnTextToChange(btnState) {
    return btnState === SUBSCRIBE_BTN_TEXT
      ? UNSUBSCRIBE_BTN_TEXT
      : SUBSCRIBE_BTN_TEXT;
  }
}

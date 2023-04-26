import { PRESS_STATUS } from "../../../constants/index.js";
import {
  SUBSCRIBE_BTN_TEXT,
  UNSUBSCRIBE_BTN_TEXT,
} from "../../../constants/ui.js";
import { Component } from "../../../core/Component.js";

export class ListViewSubscribeBtn extends Component {
  setUp() {
    const { currentPressSubscribeStatus } = this.props;
    const btnText =
      currentPressSubscribeStatus === PRESS_STATUS.UNSUBSCRIBED
        ? SUBSCRIBE_BTN_TEXT
        : UNSUBSCRIBE_BTN_TEXT;

    this._state = {
      btnText,
    };
  }

  templete() {
    const { btnText } = this._state;
    return `
      <div class="subscribe-text">${btnText}</div>
    `;
  }

  setEvent() {
    const { subscribePress, targetLogoSrc } = this.props;
    this.target.addEventListener("click", () => {
      const { btnText } = this._state;
      const btnTextToChange = this.getBtnTextToChange(btnText);
      this.setState({
        btnText: btnTextToChange,
      });
      subscribePress(targetLogoSrc);
    });
  }

  getBtnTextToChange(btnText) {
    return btnText === SUBSCRIBE_BTN_TEXT
      ? UNSUBSCRIBE_BTN_TEXT
      : SUBSCRIBE_BTN_TEXT;
  }
}

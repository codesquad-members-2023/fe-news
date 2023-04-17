import { Component } from "../../../core/Component.js";

export class ListViewSubscribeBtn extends Component {
  setUp() {
    const { subscribeStatus } = this.props;
    const btnText =
      subscribeStatus === "구독되어 있지 않습니다."
        ? "+ 구독하기"
        : "- 해지하기";
    this._state = {
      btnText: btnText,
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

  getBtnTextToChange(btnState) {
    return btnState === "+ 구독하기" ? "- 해지하기" : "+ 구독하기";
  }
}

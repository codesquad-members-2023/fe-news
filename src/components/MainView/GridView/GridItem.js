import { Component } from "../../../core/Component.js";
import subscribeBtn from "../../../images/subscribe_btn.svg";

export class GridItem extends Component {
  setUp() {
    const { pressIcon, subscribeStatus } = this.props;

    const btnText =
      subscribeStatus === "구독되어 있지 않습니다."
        ? "+ 구독하기"
        : "- 해지하기";

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
    return btnState === "+ 구독하기" ? "- 해지하기" : "+ 구독하기";
  }
}

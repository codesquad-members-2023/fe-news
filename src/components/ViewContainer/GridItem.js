import { Component } from "../../core/Component.js";

export class GridItem extends Component {
  setUp() {
    const { pressIcon, subscribeStatus } = this.props;
    const btnText =
      subscribeStatus === "구독되어 있지 않습니다." ? "구독하기" : "해지하기";

    this._state = {
      currentIcon: pressIcon,
      btnText: btnText,
      btnIcon: "src/images/subscribe_btn.svg",
    };
  }

  templete() {
    const { currentIcon, btnText, btnIcon } = this._state;
    const itemNode =
      currentIcon === btnIcon
        ? `<div class="subscribe-btn">${btnText}</div>
           <img src="${currentIcon}" alt="" />`
        : `<img src="${currentIcon}" alt="" />`;

    return `${itemNode}`;
  }

  setEvent() {
    const { btnIcon } = this._state;
    const { pressIcon, subscribePress } = this.props;

    this.target.addEventListener("mouseover", () => {
      this.setState({ currentIcon: btnIcon });
    });

    this.target.addEventListener("mouseleave", () => {
      this.setState({ currentIcon: pressIcon });
    });

    this.target.addEventListener("click", () => {
      const { btnText } = this._state;
      const btnTextToChange = this.getBtnTextToChange(btnText);

      subscribePress(pressIcon);
      this.setState({
        currentIcon: btnIcon,
        btnText: btnTextToChange,
      });
    });
  }

  getBtnTextToChange(btnState) {
    return btnState === "구독하기" ? "해지하기" : "구독하기";
  }
}

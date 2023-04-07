import { Component } from "../../core/Component.js";

export class GridItem extends Component {
  setUp() {
    this._state = {
      currentIcon: this.props.pressIcon,
    };
  }

  templete() {
    return `
      <img src="${this._state.currentIcon}" alt="" />
    `;
  }

  setEvent() {
    this.target.addEventListener("mouseover", () => {
      const icons = this.props;
      icons.currentIcon = icons.subscribeBtn;
      this.setState(icons);
    });

    this.target.addEventListener("mouseleave", () => {
      const icons = this.props;
      icons.currentIcon = icons.pressIcon;
      this.setState(icons);
    });
  }
}

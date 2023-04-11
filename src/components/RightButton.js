import Component from "../core/Component.js";

export default class RightButton extends Component {
  template() {
    return `
        <img
          src="assets/icons/rightButton.svg"
          alt="right button icon"
          class="button__image button__image--right"
        />`;
  }
}

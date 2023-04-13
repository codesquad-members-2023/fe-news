import Component from "../../../core/Component.js";

export default class LeftButton extends Component {
  template() {
    return `
    <img
      src="assets/icons/leftButton.svg"
      alt="left button icon"
      class="button__image button__image--left"
    />`;
  }
}

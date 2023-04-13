import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ControllerItemStyle';

interface ControllerItem {}

class ControllerItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = `

    <div class="controller-container">
      <slider-controller-element position="left"></slider-controller-element>
      <slider-controller-element position="right"></slider-controller-element>
    </div>
    <div class="controller"></div>
    `;

    addShadow({ target: this });
    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: style.call(this, this),
    });
  }
}

export default ControllerItem;

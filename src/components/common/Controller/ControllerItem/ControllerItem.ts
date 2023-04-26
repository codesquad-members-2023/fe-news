import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ControllerItemStyle';

interface ControllerItem {}

class ControllerItem extends HTMLElement {
  hide: string | null;

  constructor() {
    super();
    this.hide = null;
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  static get observedAttributes() {
    return ['hide'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'hide') {
      this.hide = getProperty({ target: this, name: 'hide', type: 'boolean' });
      this.render();
    }
  }

  render() {
    const template = `
    <div class="controller-container">
      <slider-controller-element position="left"></slider-controller-element>
      <slider-controller-element position="right"></slider-controller-element>
    </div>
    <div class="controller"></div>
    `;

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

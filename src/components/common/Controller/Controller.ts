import {
  add,
  addStyle,
  addShadow,
  getProperty,
  selectAll,
  setProperty,
} from '@utils/dom';
import style from './ControllerStyle';
import store from '@store/index';

interface Controller {}

class Controller extends HTMLElement {
  hide: string | undefined | null;
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ['hide'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'hide') {
      this.hide = getProperty({ target: this, name: 'hide' });

      if (this.hide === 'left') {
        return this.setHideProperty('left');
      }
      if (this.hide === 'right') {
        return this.setHideProperty('right');
      }
      this.setHideProperty('none');
    }
  }

  setHideProperty(positon: 'left' | 'right' | 'none') {
    setProperty({
      target: this.shadowRoot?.querySelector(
        `controller-item-element[position="left"]`
      ),
      name: 'hide',
      value: String(positon === 'left'),
    });
    setProperty({
      target: this.shadowRoot?.querySelector(
        `controller-item-element[position="right"]`
      ),
      name: 'hide',
      value: String(positon === 'right'),
    });
  }

  render() {
    const template = `
      <controller-item-element position="left"></controller-item-element>
      <controller-item-element position="right"></controller-item-element>
    `;

    addShadow({ target: this });
    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
  }
}

export default Controller;

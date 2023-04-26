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

      if (this.hide === 'all') {
        return this.setHideProperty('all');
      }
      if (this.hide === 'left') {
        return this.setHideProperty('left');
      }
      if (this.hide === 'right') {
        return this.setHideProperty('right');
      }
      this.setHideProperty('none');
    }
  }

  setHideProperty(positon: 'left' | 'right' | 'none' | 'all') {
    setProperty({
      target: this.shadowRoot?.querySelector(
        `controller-item-element[position="left"]`
      ),
      name: 'hide',
      value: positon === 'all' || positon === 'left' ? 1 : 0,
      type: 'boolean',
    });
    setProperty({
      target: this.shadowRoot?.querySelector(
        `controller-item-element[position="right"]`
      ),
      name: 'hide',
      value: positon === 'all' || positon === 'right' ? 1 : 0,
      type: 'boolean',
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

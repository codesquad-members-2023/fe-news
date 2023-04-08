import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import ListViewStyle from './ControllerStyle';

interface Controller {}

class Controller extends HTMLElement {
  constructor() {
    super();
    this.render();
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
      style: new ListViewStyle({ target: this }).element,
    });
  }
}

export default Controller;

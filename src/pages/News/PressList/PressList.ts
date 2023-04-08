import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import ListViewStyle from './PressListStyle';

interface PressList {
  icon?: string | null;
}

class PressList extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = `
    <presslist-header-element></presslist-header-element>
    <presslist-contents-element></presslist-contents-element>
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

export default PressList;

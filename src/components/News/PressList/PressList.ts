import { add, addStyle, addShadow } from '@utils/dom';
import style from './PressListStyle';

interface PressList {
  icon?: string | null;
}

class PressList extends HTMLElement {
  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  render() {
    const template = `
    <presslist-header-element></presslist-header-element>
    <presslist-contents-element></presslist-contents-element>
    `;

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

export default PressList;

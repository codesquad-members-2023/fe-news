import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import ListViewStyle from './PressListStyle';
import { useState } from '@utils/hooks';
import { TabType, Tab } from '@type/news';

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
      style: new ListViewStyle({ target: this }).element,
    });
  }
}

export default PressList;

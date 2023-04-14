import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './NewsStyle';

interface PressListHeader {
  icon?: string | null;
}

class PressListHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = `
    <header-element></header-element>
    <headline-element></headline-element>
    <press-list-element></press-list-element>
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

export default PressListHeader;

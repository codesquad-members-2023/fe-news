import { add, addStyle, addShadow } from '@utils/dom';
import style from './HeadlineStyle';

interface HeadlineItem {
  icon?: string | null;
}

class HeadlineItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
  }

  render() {
    const template = `
    <headline-item-element position="left"></headline-item-element>
    <headline-item-element position="right"></headline-item-element>
    `;

    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default HeadlineItem;

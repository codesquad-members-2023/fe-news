import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './HeadlineStyle';

interface HeadlineItem {
  icon?: string | null;
}

class HeadlineItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = `
    <headline-item-element></headline-item-element>
    <headline-item-element></headline-item-element>
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

export default HeadlineItem;

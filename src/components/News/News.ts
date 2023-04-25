import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './NewsStyle';

interface News {
  icon?: string | null;
}

class News extends HTMLElement {
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
    <header-element></header-element>
    <headline-element></headline-element>
    <press-list-element></press-list-element>
    `;

    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default News;

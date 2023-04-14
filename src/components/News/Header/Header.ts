import { add, addStyle, addShadow } from '@utils/dom';
import style from './HeaderStyle';

interface HeaderItem {
  icon?: string | null;
}

class HeaderItem extends HTMLElement {
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
    <p class="title">
      <icon-element name="newspaper" fill="var(--primary)" size="24"></icon-element>
      뉴스스탠드
    </p>
    <p class="date typo-body-md">2023. 02. 10. 금요일</p>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default HeaderItem;

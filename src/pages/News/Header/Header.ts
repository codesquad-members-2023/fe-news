import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import GridViewStyle from './HeaderStyle';

interface HeaderItem {
  icon?: string | null;
}

class HeaderItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = `
    <p class="title typo-display">
      <icon-element name="newspaper" fill="var(--primary)" size="24"></icon-element>
      뉴스스탠드
    </p>
    <p class="date typo-body-md">2023. 02. 10. 금요일</p>
    `;
    addShadow({ target: this });
    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: new GridViewStyle({ target: this }).element,
    });
  }
}

export default HeaderItem;

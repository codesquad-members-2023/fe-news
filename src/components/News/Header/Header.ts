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
    const now = new Date();
    const date = now
      .toLocaleString('ko-KR', {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      .replace('년', '.')
      .replace('월', '.')
      .replace('일', '.');
    const day = now.toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
      weekday: 'short',
    });

    const template = `
    <a href='/' class="title">
      <icon-element name="newspaper" fill="var(--primary)" size="24"></icon-element>
      뉴스스탠드
    </a>
    <p class="date typo-body-md">${`${date} ${day}요일`}</p>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default HeaderItem;

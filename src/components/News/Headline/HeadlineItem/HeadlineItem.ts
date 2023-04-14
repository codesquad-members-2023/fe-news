import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './HeadlineItemStyle';

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

  render(text: string = '제목') {
    const template = `
    <p class="press">
      연합뉴스
    </p>
    <p class="title">${text}</p>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default HeadlineItem;

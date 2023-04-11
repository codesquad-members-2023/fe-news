import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import HeadlineItemStyle from './HeadlineItemStyle';
import { useState } from '@utils/redux';

interface HeadlineItem {
  icon?: string | null;
}

class HeadlineItem extends HTMLElement {
  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  render(text: string = '제목') {
    const template = `
    <p class="press typo-title-sm">
      연합뉴스
    </p>
    <p class="title typo-boy-sm">${text}</p>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: new HeadlineItemStyle({ target: this }).element,
    });
  }
}

export default HeadlineItem;

import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import HeadlineItemStyle from './HeadlineItemStyle';

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
    <p class="press typo-title-sm">
      연합뉴스
    </p>
    <p class="title typo-boy-sm">[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출</p>
    `;
    addShadow({ target: this });
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

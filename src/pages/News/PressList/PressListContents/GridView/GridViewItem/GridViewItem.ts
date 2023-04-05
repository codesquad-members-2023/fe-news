import { add, addStyle, addShadow } from '@utils/dom';
import GridViewItemStyle from './GridViewItemStyle';

interface GridViewItem {
  icon?: string | null;
}

class GridViewItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = `
    <button>
      <div class="press-logo"></div>
      <div class="press-subscribe-btn-container hide">
        <button-element icon="plus">구독하기</button-element>
      </div>
    </button>
    `;
    addShadow({ target: this });
    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: new GridViewItemStyle({ target: this }).element,
    });
  }
}

export default GridViewItem;

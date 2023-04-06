import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import ListViewTabItemStyle from './ListViewTabItemStyle';

interface ListViewTabItem {
  icon?: string | null;
}

class ListViewTabItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const name = this.innerText;

    const isActive =
      getProperty({
        target: this,
        name: 'is-active',
      }) ?? '';

    const template = `
    <button class="tab-container typo-body-sm${isActive ? ' is-active' : ''}">
      <span>${name}</span>
      ${
        isActive
          ? `
          <span class="index-indicator typo-title-xs">
            <span class="current-index">1</span><span>/</span><span class="total-index">81</span>
          </span>`
          : ''
      }
      
    </button>
    `;
    addShadow({ target: this });
    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: new ListViewTabItemStyle({ target: this }).element,
    });
  }
}

export default ListViewTabItem;

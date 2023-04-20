import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ListViewTabItemStyle';

interface ListViewTabItem {
  icon?: string | null;
}

class ListViewTabItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style.call(this, this),
    });
  }

  render() {
    const name = this.innerText;
    const isActive = getProperty({
      target: this,
      name: 'is-active',
    });
    const totalNumber = getProperty({
      target: this,
      name: 'total-number',
    });

    const template = `
    <button class="tab-container typo-body-sm${isActive ? ' is-active' : ''}">
      <span>${name}</span>
      ${
        isActive
          ? `
          <span class="index-indicator typo-title-xs">
            <span class="current-index">1</span><span>/</span><span class="total-index">${totalNumber}</span>
          </span>`
          : ''
      }
    </button>
    `;

    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default ListViewTabItem;

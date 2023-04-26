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
  }

  static get observedAttributes() {
    return ['is-active', 'current-number', 'progress'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'is-active') {
      this.render();
    }
    if (name === 'current-number') {
      this.render();
    }
    if (name === 'progress') {
      this.render();
    }
  }

  render() {
    const name = getProperty({
      target: this,
      name: 'name',
    });
    const isActive = getProperty({
      target: this,
      name: 'is-active',
      type: 'boolean',
    });
    const totalNumber = getProperty({
      target: this,
      name: 'total-number',
    });
    const currentNumber = getProperty({
      target: this,
      name: 'current-number',
    });

    const template = `
    <button class="tab-container typo-body-sm${isActive ? ' is-active' : ''}">
      <span>${name}</span>
      ${
        isActive && totalNumber
          ? `
          <span class="index-indicator typo-title-xs">
            <span class="current-index">${
              Number(currentNumber) + 1
            }</span><span>/</span><span class="total-index">${totalNumber}</span>
          </span>`
          : ''
      }
    </button>
    `;

    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: style.call(this, this),
    });
  }
}

export default ListViewTabItem;

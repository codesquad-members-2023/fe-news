import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './PressListHeaderStyle';
import store from '@store';

interface PressListHeader {
  icon?: string | null;
}

class PressListHeader extends HTMLElement {
  wrap: HTMLDivElement | null = null;
  displayStore: any;
  constructor() {
    super();
  }

  connectedCallback() {
    addShadow({ target: this });
    this.wrap = document.createElement('div');
    this.wrap.classList.add('wrap');
    this.shadowRoot?.append(this.wrap);
    this.displayStore = store.display;
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
  }

  handleClick = () => {
    this.shadowRoot?.querySelectorAll('button').forEach((button) => {
      const buttonClickHandler = (e: MouseEvent) => {
        const tab = e.currentTarget as HTMLElement;

        this.displayStore.dispatch({
          type: 'CHANGE_TAB',
          payload: tab.innerText,
        });
        const state = this.displayStore.getState();
        this.render({
          ...state,
          tab: this.displayStore.getState().tab,
        });
      };
      button.addEventListener('click', buttonClickHandler);
    });
  };

  render({ tab, view }: any = this.displayStore.getState()) {
    const template = `
    <ul class="tab">
      ${tab
        .map(
          (item: any) =>
            `<li>
              <button class="${
                item.isActive ? ' is-active typo-title-md' : ' typo-body-md'
              }">${item.name}</button>
            </li>`
        )
        .join('')}
    </ul>
    <ul class="view">
    ${view
      .map(
        (item: any) =>
          `<li>
            <button>
              <icon-element name="${item.name}" size="24"  fill="${
            item.isActive ? 'var(--primary)' : 'var(--gray100)'
          }"></icon-element>
            </button>
          </li>`
      )
      .join('')}
    </ul>
    `;
    add({
      target: this.wrap,
      template,
    });
    this.handleClick();
  }
}

export default PressListHeader;

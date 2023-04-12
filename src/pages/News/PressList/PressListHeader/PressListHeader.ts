import { add, addStyle, addShadow, createWrap } from '@utils/dom';
import style from './PressListHeaderStyle';
import store from '@store/index';
import { StroeType } from '@utils/redux';
import { DisplayType } from '@store/display/displayType';

interface PressListHeader {
  icon?: string | null;
}

class PressListHeader extends HTMLElement {
  wrap: HTMLElement | null = null;
  displayStore: StroeType<DisplayType>;

  constructor() {
    super();
    this.displayStore = store.display;
  }

  connectedCallback() {
    addShadow({ target: this });
    this.wrap = createWrap();
    this.shadowRoot?.append(this.wrap);
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
  }

  render({ tab, view }: any = this.displayStore.getState()) {
    const template = `
    <ul class="tab">
      ${tab
        .map(
          (item: any) =>
            `<li>
              <button class="tab${
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
            <button class="view">
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
    this.handleTabClick();
    this.handleViewClick();
  }

  handleTabClick = () => {
    this.shadowRoot?.querySelectorAll('button').forEach((button) => {
      if (button.classList.contains('tab')) {
        const buttonClickHandler = (e: MouseEvent) => {
          const tab = e.currentTarget as HTMLElement;

          const rerender = () => {
            const state = this.displayStore.getState();
            this.render({
              ...state,
              tab: this.displayStore.getState().tab,
            });
          };
          this.displayStore.subscribe(rerender);
          this.displayStore.dispatch({
            type: 'CHANGE_TAB',
            payload: tab.innerText,
          });
        };
        button.addEventListener('click', buttonClickHandler);
      }
    });
  };

  handleViewClick = () => {
    this.shadowRoot?.querySelectorAll('button').forEach((button) => {
      if (button.classList.contains('view')) {
        const buttonClickHandler = (e: MouseEvent) => {
          const view = e.currentTarget as HTMLElement;
          const viewName = view
            .querySelector('icon-element')
            ?.getAttribute('name');

          const rerender = () => {
            const state = this.displayStore.getState();
            this.render({
              ...state,
              view: this.displayStore.getState().view,
            });
          };
          this.displayStore.subscribe(rerender);
          this.displayStore.dispatch({
            type: 'CHANGE_VIEW',
            payload: viewName,
          });
        };
        button.addEventListener('click', buttonClickHandler);
      }
    });
  };
}

export default PressListHeader;

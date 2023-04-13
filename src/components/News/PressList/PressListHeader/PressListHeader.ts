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
    const tabInfo = Object.entries(tab);
    const viewInfo = Object.entries(view);

    const template = `
    <ul class="tab">
      ${tabInfo
        .map((item: any) => {
          const name = item[0];
          const title =
            item[0] === 'general' ? '전체 언론사' : '내가 구독한 구독사';
          const isActive = item[1].isActive;
          return `
          <li>
            <button class="tab ${name}${
            isActive ? ' is-active typo-title-md' : ' typo-body-md'
          }">${title}</button>
          </li>`;
        })
        .join('')}
    </ul>
    <ul class="view">
    ${viewInfo
      .map((item: any) => {
        const name = item[0];
        const isActive = item[1].isActive;
        return `
        <li>
          <button class="view">
            <icon-element name="${name}" size="24"  fill="${
          isActive ? 'var(--primary)' : 'var(--gray100)'
        }"></icon-element>
          </button>
        </li>`;
      })
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
          const isGeneral = tab.classList.contains('general');
          this.displayStore.dispatch({
            type: 'CHANGE_TAB',
            payload: isGeneral ? 'general' : 'custom',
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
          console.log({ viewName });

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

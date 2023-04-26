import { add, addStyle, addShadow, createWrap } from '@utils/dom';
import style from './PressListHeaderStyle';
import store from '@store/index';
import { StoreType } from '@utils/redux';
import { NewsType } from '@store/news/newsType';

interface PressListHeader {
  icon?: string | null;
}

class PressListHeader extends HTMLElement {
  wrap: HTMLElement | null = null;
  newsStore: StoreType<NewsType>;

  constructor() {
    super();
    this.newsStore = store.news;
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

  render({ currentTab, currentView }: any = this.newsStore.getState().display) {
    const tab = {
      general: {
        isActive: currentTab === 'general',
      },
      custom: {
        isActive: currentTab === 'custom',
      },
    };
    const tabInfo = Object.entries(tab);
    const view = {
      grid: {
        isActive: currentView === 'grid',
      },
      list: {
        isActive: currentView === 'list',
      },
    };
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
            <icon-element name="${name}" size="24" fill="${
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

    this.shadowRoot?.querySelectorAll('button').forEach((button) => {
      if (button.classList.contains('tab'))
        return button.addEventListener('click', this.handleTabClick.bind(this));
      if (button.classList.contains('view'))
        return button.addEventListener(
          'click',
          this.handleViewClick.bind(this)
        );
    });
  }

  handleTabClick(e: MouseEvent) {
    const tab = e.currentTarget as HTMLElement;
    const rerender = () => {
      const state = this.newsStore.getState();
      this.render({
        currentView: this.newsStore.getState().display.currentView,
        currentTab: this.newsStore.getState().display.currentTab,
      });
    };
    this.newsStore.subscribe(rerender);
    const isGeneral = tab.classList.contains('general');
    this.newsStore.dispatch({
      type: 'RESET_PAGE',
    });
    this.newsStore.dispatch({
      type: 'CHANGE_TAB',
      payload: isGeneral ? 'general' : 'custom',
    });
  }

  handleViewClick(e: MouseEvent) {
    const view = e.currentTarget as HTMLElement;
    const viewName = view.querySelector('icon-element')?.getAttribute('name');

    const rerender = () => {
      const state = this.newsStore.getState();
      this.render({
        currentTab: this.newsStore.getState().display.currentTab,
        currentView: this.newsStore.getState().display.currentView,
      });
    };
    this.newsStore.subscribe(rerender);
    this.newsStore.dispatch({
      type: 'CHANGE_VIEW',
      payload: viewName,
    });
  }
}

export default PressListHeader;

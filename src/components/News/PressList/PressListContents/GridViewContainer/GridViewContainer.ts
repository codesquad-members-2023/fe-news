import { add, addStyle, addShadow, getProperty, setProperty } from '@utils/dom';
import style from './GridViewContainerStyle';
import { MAX_ITEM_NUM } from '@constant/index';
import { sliceByPage } from '@utils/common';
import { StoreType } from '@utils/redux';

import store from '@store/index';
import { NewsType } from '@store/news/newsType';

interface GridViewContainer {
  icon?: string | null;
}

class GridViewContainer extends HTMLElement {
  wrap: HTMLElement | null = null;
  newsStore: StoreType<NewsType>;

  constructor() {
    super();
    this.newsStore = store.news;
  }

  connectedCallback() {
    addShadow({ target: this });

    const pressListStr = getProperty({ target: this, name: 'press-list' });
    const pressList = pressListStr ? JSON.parse(pressListStr) : [];

    this.render(pressList);
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });

    this.newsStore.subscribe(() => {
      this.changePage();
    });
  }

  static get observedAttributes() {
    return ['press-list'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'press-list') {
      const pressList = JSON.parse(newValue);

      this.render(pressList);
    }
  }

  changePage() {
    const currentTab = this.newsStore.getState().display.currentTab;
    const currentPage = this.newsStore.getState().display.currentPage;
    this.shadowRoot
      ?.querySelectorAll('grid-view-element')
      .forEach((gridViewElement: any, i: number) => {
        setProperty({
          target: gridViewElement,
          name: 'show',
          value: i === currentPage ? 'true' : 'false',
        });
      });
  }

  render(pressList: any) {
    const maxPage = Math.ceil(pressList.length / MAX_ITEM_NUM);

    const slicedPressList = Array.from({ length: maxPage }).map(
      (v: any, i: number) =>
        sliceByPage({
          page: i,
          maxItemNum: MAX_ITEM_NUM,
          items: pressList,
        })
    );
    const template = `
    <div class="wrap">
      ${
        slicedPressList.length > 0
          ? `${slicedPressList
              .map(
                (press: any, i: number) =>
                  `<grid-view-element press-list='${JSON.stringify(
                    press
                  )}' show="${i === 0 ? 'true' : 'false'}"></grid-view-element>`
              )
              .join('')}`
          : `
        <div class="press-container no-press">
          <div class="empty">
            <h3 class="typo-title-md">구독할 언론사가 없습니다.</h3>
            <p class="typo-body-sm">언론사 구독 설정에서 관심있는 언론사를 구독하시면</p>
            <p class="typo-body-sm">언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.</p>
          </div>
        </div>`
      }
    </div>`;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default GridViewContainer;

import {
  add,
  addStyle,
  addShadow,
  getProperty,
  setProperty,
  create,
  select,
  addClass,
  removeClass,
  selectAll,
} from '@utils/dom';
import style from './GridViewContainerStyle';
import { MAX_ITEM_NUM } from '@constant/index';
import { sliceByPage } from '@utils/common';
import { StoreType } from '@utils/redux';

import store from '@store/index';
import { NewsType, PressType, TAB, VIEW } from '@store/news/newsType';
import { UserType } from '@store/user/userType';
import { filterSusbscribedPress } from '@services/news/news';

class GridViewContainer extends HTMLElement {
  wrap: HTMLElement | null = null;
  newsStore: StoreType<NewsType>;
  userStore: StoreType<UserType>;
  tab: TAB;
  pressList: PressType[];

  constructor() {
    super();
    this.newsStore = store.news;
    this.userStore = store.user;
    this.tab = getProperty({ target: this, name: 'tab' });
    this.pressList = [];
  }

  async connectedCallback() {
    addShadow({ target: this });
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });

    this.newsStore.subscribe(this.handleDisplay.bind(this));
  }

  static get observedAttributes() {
    return ['press-list'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'press-list') {
      this.pressList = getProperty({
        target: this,
        name: 'press-list',
        type: 'object',
      });
      this.render();
    }
  }

  handleDisplay() {
    const { currentPage } = this.newsStore.getState().display;
    const gridViewElements = selectAll({
      selector: ['grid-view-element'],
      parent: this,
    });
    gridViewElements.forEach((element: HTMLElement, i: number) => {
      if (currentPage === i)
        setProperty({
          target: element,
          name: 'show',
          value: 1,
          type: 'boolean',
        });
      else
        setProperty({
          target: element,
          name: 'show',
          value: 0,
          type: 'boolean',
        });
    });
  }

  async render() {
    const pressList = this.pressList;
    this.newsStore.dispatch({
      type: 'SET_TOTAL_PAGE',
      payload: {
        view: VIEW.GRID,
        tab: this.tab,
        totalPage: Math.ceil(pressList.length / 24),
      },
    });
    const maxPage = Math.ceil(pressList.length / MAX_ITEM_NUM);
    const slicedPressList = Array.from({ length: maxPage }).map(
      (v: unknown, i: number) =>
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
                  )}' show="${i === 0 ? '1' : '0'}"></grid-view-element>`
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

import {
  add,
  addStyle,
  addShadow,
  getProperty,
  select,
  setProperty,
  create,
} from '@utils/dom';
import style from './ListViewStyle';
import { getSection, getCustomSection } from '@services/news/section/section';
import store from '@store/index';
import {
  NewsType,
  PressType,
  SectionType,
  TAB,
  VIEW,
} from '@store/news/newsType';
import { StoreType, checkStateChanged } from '@utils/redux';
import { UserType } from '@store/user/userType';

class ListView extends HTMLElement {
  newsStore: StoreType<NewsType>;
  userStore: StoreType<UserType>;
  currentPage: number;
  tab: TAB;
  pressList: PressType[];
  isEmpty: boolean;

  constructor() {
    super();
    this.newsStore = store.news;
    this.userStore = store.user;
    this.currentPage = this.newsStore.getState().display.currentPage;
    this.tab = getProperty({
      target: this,
      name: 'tab',
    });
    this.pressList = [];
    this.isEmpty = true;

    this.handleDisplay({});
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

      setProperty({
        target: select({ selector: ['list-view-tab-element'], parent: this }),
        name: 'press-list',
        value: getProperty({ target: this, name: 'press-list' }),
      });
      this.handleDisplay({ pressList: this.pressList });
    }
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });

    this.newsStore.subscribe(() => {
      const { currentPage, currentView } = this.newsStore.getState().display;
      const isListView = currentView === VIEW.LIST;
      const currentPageChanged = checkStateChanged<NewsType, number>({
        store: this.newsStore,
        target: ['display', 'currentPage'],
        prevState: this.currentPage,
      });

      if (isListView && currentPageChanged) {
        this.currentPage = currentPage;
        this.handleDisplay.call(this, {});
      }
    });

    if (this.tab === TAB.CUSTOM) {
      this.userStore.subscribe(this.handleDisplay.bind(this, {}));
    }
  }

  async getCustomSectionData({
    page = 0,
    pressList,
  }: {
    page: number;
    pressList?: PressType[] | null;
  }) {
    if (!pressList) return { section: null, totalPage: null };
    const pressId = pressList[page]?.pid;
    if (!pressId) return { section: null, totalPage: null };
    const section = await getCustomSection({
      pressId,
    });
    if (!section) return { section: null, totalPage: null };
    const totalPage = this.userStore.getState().subscribingPressIds.length;
    return { section, totalPage };
  }

  async getSectionData({ page = 0 }: { page: number }) {
    const section = await getSection({ newsStore: this.newsStore, page });
    if (!section) return { section: null, totalPage: null };
    const totalPage = section.tabData.totalNumber;
    return { section, totalPage };
  }

  async handleDisplay({
    pressList = this.pressList,
  }: {
    pressList?: PressType[] | null;
  }) {
    const { currentPage } = this.newsStore.getState().display;
    const isGeneral = this.tab === TAB.GENERAL;
    const { section, totalPage } = isGeneral
      ? await this.getSectionData({
          page: currentPage,
        })
      : await this.getCustomSectionData({
          page: currentPage,
          pressList,
        });
    if (!section) return;

    this.newsStore.dispatch({
      type: 'SET_TOTAL_PAGE',
      payload: {
        view: VIEW.LIST,
        tab: this.tab,
        totalPage,
      },
    });

    setProperty({
      target: select({
        selector: ['list-view-tab-element'],
        parent: this,
      }),
      name: 'section-data',
      value: section,
      type: 'object',
    });

    setProperty({
      target: select({
        selector: ['list-view-item-element'],
        parent: this,
      }),
      name: 'section-data',
      value: section.sectionData,
      type: 'object',
    });
  }

  render() {
    const tab = getProperty({ target: this, name: 'tab' });
    const isCustom = tab === TAB.CUSTOM;

    if (isCustom && this.pressList.length <= 0) {
    }

    const template = `
    ${
      isCustom && this.pressList.length <= 0
        ? `
    <div class="press-container no-press">
      <div class="empty">
        <h3 class="typo-title-md">구독할 언론사가 없습니다.</h3>
        <p class="typo-body-sm">언론사 구독 설정에서 관심있는 언론사를 구독하시면</p>
        <p class="typo-body-sm">언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.</p>
      </div>
    </div>`
        : `
    <div class="listview-container">
      <list-view-tab-element tab='${tab}'></list-view-tab-element>
      <list-view-item-element tab='${tab}'></list-view-item-element>
    </div>
    `
    }`;

    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default ListView;

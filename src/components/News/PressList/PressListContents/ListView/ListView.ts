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
import { customSetInterval } from '@utils/animation';
import { SILDE_INTERVAL_TIME } from '@constant/index';

class ListView extends HTMLElement {
  newsStore: StoreType<NewsType>;
  userStore: StoreType<UserType>;
  currentPage: number;
  tab: TAB;
  pressList: PressType[];
  time: number;
  intervalId: string | number | NodeJS.Timeout | undefined;

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
    this.time = 0;

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

    const changePage = () => {
      const { currentPage, currentView, currentTab } =
        this.newsStore.getState().display;
      const isListView = currentView === VIEW.LIST;
      const currentPageChanged = checkStateChanged<NewsType, number>({
        store: this.newsStore,
        target: ['display', 'currentPage'],
        prevState: this.currentPage,
      });
      const isSameTab = this.tab === currentTab;

      if (isListView && isSameTab && currentPageChanged) {
        this.currentPage = currentPage;
        this.handleDisplay.call(this, {});
      }
    };

    this.newsStore.subscribe(changePage.bind(this));

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

  handleSlide() {
    console.log('dddd');
    const target = select({
      selector: ['list-view-tab-element'],
      parent: this,
    });
    setProperty({
      target,
      name: 'progress',
      value: 0,
      type: 'number',
    });
    this.newsStore.dispatch({ type: 'NEXT_PAGE' });
  }

  render() {
    const tab = getProperty({ target: this, name: 'tab' });
    const isCustom = tab === TAB.CUSTOM;

    if (isCustom && this.pressList.length <= 0) {
    }

    const template = `
    ${`
    <div class="listview-container">
      <list-view-tab-element tab='${tab}'></list-view-tab-element>
      <list-view-item-element tab='${tab}'></list-view-item-element>
    </div>
    `}`;

    add({
      target: this.shadowRoot,
      template,
    });

    this.newsStore.subscribe(() => {
      const { currentTab, currentView } = this.newsStore.getState().display;

      if (
        currentView === VIEW.LIST &&
        this.tab === currentTab &&
        !this.intervalId
      ) {
        this.intervalId = setInterval(
          this.handleSlide.bind(this),
          SILDE_INTERVAL_TIME
        );
      } else {
        clearInterval(this.intervalId);
        this.intervalId = undefined;
      }
    });
  }
}

export default ListView;

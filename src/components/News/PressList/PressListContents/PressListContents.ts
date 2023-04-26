import {
  add,
  addStyle,
  addShadow,
  select,
  create,
  createWrap,
  toggleClass,
  setProperty,
  getProperty,
  removeClass,
  addClass,
  selectAll,
} from '@utils/dom';
import list from './PressListContentsStyle';
import { StoreType } from '@utils/redux';
import store from '@store/index';
import { getUser, subscribeAPI, unsubscribeAPI } from '@apis/user';
import { TEMP_ID } from '@constant/index';
import { UserType } from '@store/user/userType';
import { getSection, getCustomSection } from '@services/news/section/section';
import { NewsType, PressType, TAB, VIEW } from '@store/news/newsType';
import { getSlicedPressList } from '@services/news/press/press';
import { filterSusbscribedPress } from '@services/news/news';
import { getPressAPI } from '@apis/news';

class PressListContents extends HTMLElement {
  wrap: HTMLElement | null = null;
  newsStore: StoreType<NewsType>;
  userStore: StoreType<UserType>;
  pressList: PressType[];

  constructor() {
    super();
    this.newsStore = store.news;
    this.userStore = store.user;
    this.pressList = [];
  }

  async connectedCallback() {
    addShadow({ target: this });
    this.wrap = createWrap();
    this.shadowRoot?.append(this.wrap);
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: list(),
    });

    await this.setPressList();
    await this.setCustomPressList();
    this.handleDisplay();

    this.userStore.subscribe(this.setCustomPressList.bind(this));
  }

  async setCustomPressList() {
    const customPressList = filterSusbscribedPress({
      pressList: this.pressList,
      subscribingPressIds: this.userStore.getState().subscribingPressIds,
    });
    setProperty({
      target: select({
        selector: ['section.custom grid-view-container-element'],
        parent: this,
      }),
      name: 'press-list',
      value: customPressList,
      type: 'object',
    });
    setProperty({
      target: select({
        selector: ['section.custom list-view-element'],
        parent: this,
      }),
      name: 'press-list',
      value: customPressList,
      type: 'object',
    });
  }

  async setPressList() {
    this.pressList = await getPressAPI();

    const slicedPressList = getSlicedPressList({ pressList: this.pressList });

    setProperty({
      target: select({
        selector: ['section.general grid-view-container-element'],
        parent: this,
      }),
      name: 'press-list',
      value: slicedPressList,
      type: 'object',
    });
  }

  render() {
    const template = `
    <section class="general show">
      <div class="view grid show">
        <grid-view-container-element tab='general'></grid-view-container-element>
      </div>
      <div class="view list">
        <list-view-element tab='general'></list-view-element>
      </div>
    </section>
    <section class="custom">
      <div class="view grid">
        <grid-view-container-element tab='custom'></grid-view-container-element>
      </div>
      <div class="view list">
        <list-view-element tab='custom'></list-view-element>
      </div>
    </section>
    <press-list-controller-element></press-list-controller-element>
    `;

    add({
      target: this.wrap,
      template,
    });
  }

  async handleDisplay() {
    const toggleShowClass = async () => {
      const { currentTab, currentView } = this.newsStore.getState().display;

      const hideTab = currentTab === TAB.GENERAL ? TAB.CUSTOM : TAB.GENERAL;
      const hideView = currentView === VIEW.GRID ? VIEW.LIST : VIEW.GRID;

      const tabToDisplay = select({
        selector: [`section.${currentTab}`],
        parent: this.wrap,
      });
      const tabToHide = select({
        selector: [`section.${hideTab}`],
        parent: this.wrap,
      });
      const viewToDisplay = select({
        selector: [`section.${currentTab} .view.${currentView}`],
        parent: this.wrap,
      });
      const viewToHide = select({
        selector: [`section.${currentTab} .view.${hideView}`],
        parent: this.wrap,
      });

      addClass({ target: tabToDisplay, className: 'show' });
      removeClass({ target: tabToHide, className: 'show' });
      addClass({ target: viewToDisplay, className: 'show' });
      removeClass({ target: viewToHide, className: 'show' });
    };
    this.newsStore.subscribe(toggleShowClass);
  }
}

export default PressListContents;

import {
  add,
  addStyle,
  addShadow,
  getProperty,
  setProperty,
  selectAll,
  select,
} from '@utils/dom';
import style from './ListViewTabStyle';
import store from '@store/index';
import { StoreType } from '@utils/redux';
import { UserType } from '@store/user/userType';
import { CATEGORY, NewsType, SectionType, TAB } from '@store/news/newsType';
import PressList from '@component/News/PressList/PressList';
import { CATEGORIES } from '@constant/index';

interface ListViewTab {
  icon?: string | null;
}

class ListViewTab extends HTMLElement {
  userStore: StoreType<UserType>;
  newStore: StoreType<NewsType>;
  tab: TAB;
  pressList: PressList[];
  constructor() {
    super();
    this.userStore = store.user;
    this.newStore = store.news;
    this.tab = getProperty({
      target: this,
      name: 'tab',
    });
    this.pressList = [];
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  static get observedAttributes() {
    return ['section-data', 'press-list', 'progress'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if ((this.tab === TAB.CUSTOM && name) === 'press-list') {
      this.pressList = JSON.parse(newValue);
      this.renderTabForCustomTab();
    }
    if (name === 'section-data') {
      this.render();
      this.rearrangeTabPosition();
    }
    if (name === 'progress') {
      const target = select({
        selector: ['list-view-tab-item-element[is-active="1"]'],
        parent: this,
      });
      setProperty({ target, name: 'progress', value: newValue });
    }
  }

  render() {
    if (this.tab === TAB.GENERAL) {
      this.renderTabForGeneralTab();
    }
    if (this.tab === TAB.CUSTOM) {
      this.renderTabForCustomTab();
      this.userStore.subscribe(() => {
        this.renderTabForCustomTab();
      });
    }
  }

  rearrangeTabPosition() {
    const tabWrap = this.shadowRoot?.querySelector('.tab-wrap') as HTMLElement;
    const activeTab = this.shadowRoot?.querySelector(
      'list-view-tab-item-element[is-active="1"]'
    );

    if (!tabWrap || !activeTab) return;

    const tabWrapX = tabWrap?.getBoundingClientRect().x;
    const actionTabX = activeTab?.getBoundingClientRect().x;
    const xDiff = actionTabX - tabWrapX;
    this.scrollTo(xDiff, 0);
  }

  renderTabForGeneralTab() {
    const section = getProperty({
      target: this,
      name: 'section-data',
      type: 'object',
    });

    if (!section) return;

    const { sectionData, tabData } = section;
    const { category, pressId } = sectionData;
    const { categoryCounts, currentCategoryIndex } = tabData;

    const isActive = (categoryId: string) =>
      category === categoryId ? true : false;

    const template = `
      <div class="tab-wrap">
      ${Object.keys(categoryCounts)
        .map((categoryId, i: number) => {
          return `
          <list-view-tab-item-element id='${pressId}' total-number='${
            categoryCounts[categoryId]
          }' name='${
            CATEGORIES[Number(categoryId)]
          }' category-id='${categoryId}' is-active=${
            isActive(categoryId) ? '1' : '0'
          } ${
            isActive(categoryId)
              ? `progress="0" current-number='${currentCategoryIndex}'`
              : ''
          }></list-view-tab-item-element>
          `;
        })
        .join('')}
      </div>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
    selectAll({
      selector: ['list-view-tab-item-element'],
      parent: this,
    })?.forEach((element: HTMLElement) =>
      element.addEventListener('click', (e) =>
        this.handleTabClick(e, categoryCounts)
      )
    );
  }

  renderTabForCustomTab() {
    const section = getProperty({
      target: this,
      name: 'section-data',
      type: 'object',
    });
    if (!section) return;
    const { pressId } = section.sectionData;

    const checkActive = (id: string, currentPressId: string) =>
      currentPressId === id;

    const template = `
      <div class="tab-wrap" draggable="true">
      ${this.pressList
        .map((press: any, i: number) => {
          const isActive = checkActive(press.pid, pressId);
          return `<list-view-tab-item-element index='${i}' is-active=${
            isActive ? '1' : '0'
          } ${isActive ? `progress="50"` : ''} id='${press.pid}' name='${
            press.pname
          }'>
            </list-view-tab-item-element>`;
        })
        .join('')}
      </div>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
    selectAll({
      selector: ['list-view-tab-item-element'],
      parent: this,
    })?.forEach((element: HTMLElement) =>
      element.addEventListener('click', this.handleCustomTabClick.bind(this))
    );
  }

  handleTabClick(e: Event, categoryCounts: any) {
    const target = e.target as HTMLElement;

    const categoryId = getProperty({
      target,
      name: 'category-id',
      type: 'number',
    });
    const categoryCountsValues: number[] = Object.values(categoryCounts);

    let targetPage = 0;
    if (categoryId !== 0) {
      targetPage = categoryCountsValues
        .slice(0, categoryId)
        .reduce((acc: number, curr: number, i: number) => {
          return acc + curr;
        }, 0);
    }

    this.newStore.dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: { currentPage: targetPage },
    });
  }

  handleCustomTabClick(e: Event) {
    const target = e.target as HTMLElement;

    const index = getProperty({ target, name: 'index' });
    this.newStore.dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: { currentPage: index },
    });
  }
}

export default ListViewTab;

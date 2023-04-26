import { add, addStyle, addShadow, getProperty, setProperty } from '@utils/dom';
import style from './ListViewTabStyle';
import store from '@store/index';
import { StoreType } from '@utils/redux';
import { UserType } from '@store/user/userType';
import { CATEGORY, NewsType, SectionType, TAB } from '@store/news/newsType';
import PressList from '@component/News/PressList/PressList';

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
    return ['section-data', 'press-list'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if ((this.tab === TAB.CUSTOM && name) === 'press-list') {
      this.pressList = getProperty({
        target: this,
        name: 'press-list',
        type: 'object',
      });
      this.renderTabForCustomTab();
    }
    if (name === 'section-data') {
      this.render();
    }
  }

  handleDrag() {
    this.shadowRoot
      ?.querySelector('.tab-wrap')
      ?.addEventListener('drag', () => {});
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
    this.handleDrag();
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

    const categories: CATEGORY[] = [
      CATEGORY.GENERAL,
      CATEGORY.BRODCAST,
      CATEGORY.IT,
      CATEGORY.ENGLISH,
      CATEGORY.SPORT,
      CATEGORY.MAGAZINE,
      CATEGORY.REGION,
    ];

    const template = `
      <div class="tab-wrap">
      ${Object.keys(categoryCounts)
        .map((categoryId) => {
          return `
          <list-view-tab-item-element id='${pressId}' total-number='${
            categoryCounts[categoryId]
          }' name='${
            categories[Number(categoryId)]
          }' category-id='${categoryId}' is-active=${
            isActive(categoryId) ? '1' : '0'
          } ${
            isActive(categoryId)
              ? `progress="50" current-number='${currentCategoryIndex}'`
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
  }

  renderTabForCustomTab() {
    const section = getProperty({
      target: this,
      name: 'section-data',
      type: 'object',
    });

    if (!section) return;

    const { pressId } = section.sectionData;

    const currentPressId = pressId;
    const isActive = (id: string, currentPressId: string) =>
      currentPressId === id;
    const currentPage = this.newStore.getState().display.currentPage;

    const template = `
      <div class="tab-wrap" draggable="true">
      ${this.pressList
        .map((press: any) => {
          return `<list-view-tab-item-element is-active=${
            isActive(press.pid, currentPressId) ? '1' : '0'
          } ${isActive(press.pid, currentPressId) ? `progress="50"` : ''} id='${
            press.pid
          }' name='${press.pname}'>
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
      style: style(currentPage),
    });
  }
}

export default ListViewTab;

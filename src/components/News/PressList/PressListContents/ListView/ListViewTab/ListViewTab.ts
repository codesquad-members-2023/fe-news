import { add, addStyle, addShadow, getProperty, setProperty } from '@utils/dom';
import style from './ListViewTabStyle';
import store from '@store/index';
import { StoreType } from '@utils/redux';
import { UserType } from '@store/user/userType';
import { NewsType, SectionType, TAB } from '@store/news/newsType';
import News from 'src/App';

interface ListViewTab {
  icon?: string | null;
}

class ListViewTab extends HTMLElement {
  userStore: StoreType<UserType>;
  newStore: StoreType<NewsType>;
  constructor() {
    super();
    this.userStore = store.user;
    this.newStore = store.news;
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  static get observedAttributes() {
    return ['section'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'section') {
      this.render();
    }
  }

  handleDrag() {
    this.shadowRoot
      ?.querySelector('.tab-wrap')
      ?.addEventListener('drag', () => {});
  }

  render() {
    const tab = getProperty({
      target: this,
      name: 'tab',
    });

    const sectionData = getProperty({
      target: this,
      name: 'section-data',
      type: 'object',
    });

    if (tab === TAB.GENERAL) {
      this.renderTabForGeneralTab();
    } else {
      this.renderTabForCustomTab(sectionData);
      this.userStore.subscribe(() => {
        const subscribingPressIds =
          this.userStore.getState().subscribingPressIds;
        this.renderTabForCustomTab(sectionData);
      });
    }
    this.handleDrag();
  }

  renderTabForGeneralTab() {
    const section = getProperty({
      target: this,
      name: 'section',
      type: 'object',
    });

    const { category, pressId } = section.sectionData;
    const { categoryCounts, categoryIndex } = section.tabData;

    const isActive = (categoryId: string) =>
      category === categoryId ? true : false;

    const categories = [
      '종합/경제',
      '방송/통신',
      'IT',
      '영자지',
      '스포츠/연예',
      '매거진/전문지',
      '지역',
    ];

    const template = `
      <div class="tab-wrap">
      ${Object.keys(categoryCounts)
        .map((categoryId) => {
          return `<list-view-tab-item-element id='${pressId}' total-number='${
            categoryCounts[categoryId]
          }' name='${
            categories[Number(categoryId)]
          }' category-id='${categoryId}' is-active=${
            isActive(categoryId) ? 'true' : 'false'
          } ${
            isActive(categoryId)
              ? `progress="50" current-number='${categoryIndex}'`
              : ''
          }></list-view-tab-item-element>`;
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

  renderTabForCustomTab(tabData: SectionType['tabData']) {
    const section = getProperty({
      target: this,
      name: 'section',
      type: 'object',
    });
    const { pressId } = section.sectionData;
    const subscribingPressIds = this.userStore.getState().subscribingPressIds;
    const currentPressId = pressId;
    const isActive = (id: string) => (currentPressId === id ? true : false);
    const currentPage = this.newStore.getState().display.currentPage;

    const template = `
      <div class="tab-wrap" draggable="true">
      ${subscribingPressIds
        .map(
          (press: any) =>
            `<list-view-tab-item-element is-active=${
              isActive(press.pid) ? 'true' : 'false'
            } ${isActive(press.pid) ? `progress="50"` : ''} id='${
              press.pid
            }' name='${press.pname}'>
            </list-view-tab-item-element>`
        )
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

import { add, addStyle, addShadow, getProperty, setProperty } from '@utils/dom';
import style from './ListViewTabStyle';
import store from '@store/index';
import { StroeType } from '@utils/redux';
import { UserType } from '@store/user/userType';
import { PressListType } from '@store/press/pressType';
import { SectionInfoType } from '@store/section/sectionType';
import { DisplayType } from '@store/display/displayType';

interface ListViewTab {
  icon?: string | null;
}

class ListViewTab extends HTMLElement {
  userStore: StroeType<UserType>;
  pressStore: StroeType<PressListType>;
  displayStore: StroeType<DisplayType>;
  constructor() {
    super();
    this.userStore = store.user;
    this.pressStore = store.press;
    this.displayStore = store.display;
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  static get observedAttributes() {
    return ['section-data'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'section-data') {
      this.render();
    }
  }

  handleDrag() {
    this.shadowRoot
      ?.querySelector('.tab-wrap')
      ?.addEventListener('drag', () => {});
  }

  renderTabForCustomTab(
    sectionData: SectionInfoType,
    subscribingPress: PressListType['customPressList']
  ) {
    const currentPressId = sectionData.section.pressId;
    const isActive = (pressId: string) =>
      currentPressId === pressId ? true : false;
    const currentPage =
      this.displayStore.getState().page['list']['custom'].currentPage;

    const template = `
      <div class="tab-wrap" draggable="true">
      ${subscribingPress
        .map(
          (press) =>
            `<list-view-tab-item-element is-active=${
              isActive(press.pid) ? 'true' : 'false'
            } ${isActive(press.pid) ? `progress="50"` : ''} id='${
              press.pid
            }' name='${press.pname}' section-data='${JSON.stringify(
              sectionData
            )}'>
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

  renderTabForGeneralTab(sectionData: SectionInfoType) {
    const currentCategory = sectionData.section.category;
    const categoryCounts = sectionData.categoryCounts;
    const currentNumber =
      this.displayStore.getState().category['list']['general'].index;
    const isActive = (categoryId: string) =>
      currentCategory === categoryId ? true : false;

    const categories = [
      '종합/경제',
      '방송/통신',
      'IT',
      '영자지',
      '스포츠/연예',
      '매거진/전문지',
      '지역',
    ];

    const getCurrentCategoryIndex = () => {
      const accumulatedNum = Object.entries(categoryCounts).reduce(
        (result: number, count: any) => {
          const key = count[0];
          const value = count[1];
          if (Number(key) < Number(currentCategory)) return result + value;
          return result;
        },
        0
      );
      return currentNumber - accumulatedNum;
    };

    const template = `
      <div class="tab-wrap">
      ${Object.keys(categoryCounts)
        .map((categoryId) => {
          return `<list-view-tab-item-element total-number='${
            categoryCounts[categoryId]
          }' name='${
            categories[Number(categoryId)]
          }' category-id='${categoryId}' is-active=${
            isActive(categoryId) ? 'true' : 'false'
          } ${
            isActive(categoryId)
              ? `progress="50" current-number='${getCurrentCategoryIndex()}'`
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

  render() {
    const isCustom = getProperty({
      target: this,
      name: 'is-custom',
    });

    const sectionData = JSON.parse(
      getProperty({ target: this, name: 'section-data', isStringfied: true })
    );

    if (isCustom !== 'true') {
      this.renderTabForGeneralTab(sectionData);
    } else {
      const subscribingPress = this.pressStore.getState().customPressList;
      this.renderTabForCustomTab(sectionData, subscribingPress);
      this.pressStore.subscribe(() => {
        const subscribingPress = this.pressStore.getState().customPressList;
        this.renderTabForCustomTab(sectionData, subscribingPress);
      });
    }
    this.handleDrag();
  }
}

export default ListViewTab;

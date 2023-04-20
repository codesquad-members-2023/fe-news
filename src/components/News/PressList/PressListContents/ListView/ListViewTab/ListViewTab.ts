import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ListViewTabStyle';
import store from '@store/index';
import { StroeType } from '@utils/redux';
import { UserType } from '@store/user/userType';
import { PressListType } from '@store/press/pressType';

interface ListViewTab {
  icon?: string | null;
}

class ListViewTab extends HTMLElement {
  userStore: StroeType<UserType>;
  pressStore: StroeType<PressListType>;
  constructor() {
    super();
    this.userStore = store.user;
    this.pressStore = store.press;
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  renderTabForCustomTab(subscribingPress: PressListType['customPressList']) {
    const currentPressId = getProperty({
      target: this,
      name: 'current-press-id',
    });
    const isActive = (pressId: string) =>
      currentPressId === pressId ? true : false;

    const template = `
      <div class="tab-wrap">
      ${subscribingPress
        .map(
          (press) =>
            `<list-view-tab-item-element is-active=${
              isActive(press.pid) ? 'true' : 'false'
            } ${isActive(press.pid) ? `progress="50"` : ''}>
              ${press.pname}
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
      style: style(),
    });
  }

  renderTabForGeneralTab() {
    const categoryCountsStr = getProperty({
      target: this,
      name: 'category-counts',
    });
    const currentCategoryStr = getProperty({
      target: this,
      name: 'current-category',
    });

    const categoryCounts = categoryCountsStr && JSON.parse(categoryCountsStr);
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
        .map(
          (categoryId) =>
            `<list-view-tab-item-element is-active=${
              currentCategoryStr === categoryId ? 'true' : 'false'
            } ${
              currentCategoryStr === categoryId
                ? `progress="50" total-number='${categoryCounts[categoryId]}'`
                : ''
            }>${categories[Number(categoryId)]}</list-view-tab-item-element>`
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
      style: style(),
    });
  }

  render() {
    const isCustom = getProperty({
      target: this,
      name: 'is-custom',
    });

    if (isCustom !== 'true') {
      this.renderTabForGeneralTab();
    } else {
      this.pressStore.subscribe(() => {
        const subscribingPress = this.pressStore.getState().customPressList;
        this.renderTabForCustomTab(subscribingPress);
      });
    }
  }
}

export default ListViewTab;

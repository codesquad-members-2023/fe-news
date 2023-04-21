import { validatorUtils, dataUtils } from '../../utils/index.js';
import { tabStore, subscriptionListStore } from '../../store/index.js';

const { hasValue, isActiveTab } = validatorUtils;
const { getListItemData } = dataUtils;

export default class MainContentList {
  #categoryOrder = ['종합/경제', '방송/통신', 'IT', '영자지', '스포츠/연예', '매거진/전문지', '지역'];

  #imgSrc = {
    beforeBtn: 'src/images/before_btn.svg',
    nextBtn: 'src/images/next_btn.svg'
  };

  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('section');

    this.props = props;
    const { pressTabType } = this.props;

    this.$mainEle.classList.add('main-content__list', `${pressTabType}-list__section`);

    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);

    tabStore.register(this.displayElement.bind(this));
  }

  render() {
    const { allPressData } = this.props;
    const listItemData = getListItemData({
      dataArr: allPressData,
      category: this.#categoryOrder[0],
      listItemIdx: 0
    });

    this.$mainEle.innerHTML = this.template(listItemData);

    this.displayElement();
  }

  displayElement() {
    const { pressTabType } = this.props;
    const { activePressTab, activeShowTab } = tabStore.getState();

    if (
      !isActiveTab({
        pressTabType,
        showTabType: 'list',
        activePressTab,
        activeShowTab
      })
    )
      this.$mainEle.classList.add('display-none');
    else this.$mainEle.classList.remove('display-none');
  }

  template(listItemData) {
    const { pressTabType } = this.props;
    const { beforeBtn, nextBtn } = this.#imgSrc;

    return `
      <div class="main-content__list-before-btn">
        <img id="grid-before-btn" src="${beforeBtn}" alt="before grid page" />
      </div>
      <div class="main-content__list-next-btn">
        <img id="grid-next-btn" src="${nextBtn}" alt="next grid page" />
      </div>
      <div class="main-content__list-wrapper">
        ${pressTabType === 'all' ? this.allCategoriesTemplate() : ''}
        ${this.listItemContentTemplate(listItemData)}
      </div>
    `;
  }

  allCategoriesTemplate() {
    const { pressTabType } = this.props;

    if (pressTabType !== 'all') return;

    const allCategoriesTemplate = this.#categoryOrder
      .map((category, idx) => `<li data-news-category="${idx}">${category}</li>`, '')
      .join('');

    return /* html */ `
      <ul class="press-list__category">
        ${allCategoriesTemplate}
      </ul>    
    `;
  }

  listItemContentTemplate(listItemData) {
    return /* html */ `
      <div class="press-list__content">
        ${this.listItemInfoTemplate(listItemData)}
      </div>
    `;
  }

  subscribeToggleBtnTemplate(pressName) {
    const subscriptionList = subscriptionListStore.getState();
    const isSubscribed = hasValue(subscriptionList, pressName);

    return /* html */ `<button class="subscribe-toggle-btn ${
      isSubscribed ? 'unsubscribe-btn' : 'subscribe-btn'
    }">+ ${isSubscribed ? '해지하기' : '구독하기'}</button>`;
  }

  listItemInfoTemplate({ pressName, pressLogo, pressHref, updateTime }) {
    return /* html */ `
      <header class="press-list__info">
        <a href="${pressHref}"><img src="${pressLogo}" alt="go to ${pressName} site"/></a>
        <span class="update-time">${updateTime}</span>
        <div class="subscribe-toggle-btn-container">
          ${this.subscribeToggleBtnTemplate(pressName)}
        </div>
      </header>
    `;
  }
}

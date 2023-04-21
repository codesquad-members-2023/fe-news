import { validatorUtils } from '../../utils/index.js';
import { tabStore } from '../../store/index.js';

const { isActiveTab } = validatorUtils;

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
    this.$mainEle.innerHTML = this.template();

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

  template() {
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
}

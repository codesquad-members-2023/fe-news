import { domUtils, dataUtils, validatorUtils } from '../../utils/index.js';
import { tabStore, gridPageStore, subscriptionListStore } from '../../store/index.js';
import PressGrid from './grid/pressGrid.js';

const { $ } = domUtils;
const { isActiveTab, isFirstPage, isLastPage } = validatorUtils;
const { getDataSlices } = dataUtils;

export default class MainContentGrid {
  #gridItemCount = 24;

  #imgSrc = {
    beforeBtn: 'src/images/before_btn.svg',
    nextBtn: 'src/images/next_btn.svg'
  };

  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('section');

    this.props = props;
    const { pressTabType } = this.props;

    this.$ele.classList.add('main-content__grid', `${pressTabType}-grid__section`);

    this.$parent.insertAdjacentElement('beforeend', this.$ele);

    gridPageStore.register(this.displayBtn.bind(this));
    tabStore.register(this.displayElement.bind(this));
  }

  render() {
    this.$ele.innerHTML = this.template();

    this.renderPressGridContainers();

    this.displayElement();
    this.displayBtn();
    this.setEvent();
  }

  renderPressGridContainers() {
    const { pressTabType, allPressData } = this.props;
    const subscriptionList = subscriptionListStore.getState();

    const subscribedPressData = allPressData.filter(({ pressName }) => subscriptionList.has(pressName));
    const pressData = pressTabType === 'all' ? allPressData : subscribedPressData;
    const pressDataSlices = getDataSlices({
      dataArr: pressData,
      count: this.#gridItemCount
    });
    const $gridWrapper = $({
      selector: '.main-content__grid-wrapper',
      parent: this.$ele
    });

    const pagesCount = pressDataSlices.length === 0 ? 1 : pressDataSlices.length;

    for (let page = 0; page < pagesCount; page += 1) {
      const data = pressDataSlices[page];
      new PressGrid($gridWrapper, {
        pressTabType,
        page,
        gridItemsData: data ?? []
      }).render();
    }

    gridPageStore.dispatch({
      type: 'initGridPage',
      payload: {
        pressTabType,
        currentPage: 0,
        totalPages: pagesCount
      }
    });
  }

  displayElement() {
    const { pressTabType } = this.props;
    const { activePressTab, activeShowTab } = tabStore.getState();

    if (
      !isActiveTab({
        pressTabType,
        showTabType: 'grid',
        activePressTab,
        activeShowTab
      })
    )
      this.$ele.classList.add('display-none');
    else this.$ele.classList.remove('display-none');
  }

  displayBtn() {
    const { pressTabType } = this.props;
    const { currentPage, totalPages } = gridPageStore.getState()[pressTabType];

    const $beforeBtn = $({
      selector: '.main-content__grid-before-btn',
      parent: this.$ele
    });
    const $nextBtn = $({
      selector: '.main-content__grid-next-btn',
      parent: this.$ele
    });

    if (isFirstPage(currentPage)) $beforeBtn.classList.add('hidden');
    else $beforeBtn.classList.remove('hidden');

    if (isLastPage(currentPage, totalPages)) $nextBtn.classList.add('hidden');
    else $nextBtn.classList.remove('hidden');
  }

  template() {
    const { beforeBtn, nextBtn } = this.#imgSrc;

    return `
      <div class="main-content__grid-before-btn">
        <img id="grid-before-btn" src="${beforeBtn}" alt="before grid page" />
      </div>
      <div class="main-content__grid-next-btn">
        <img id="grid-next-btn" src="${nextBtn}" alt="next grid page" />
      </div>
      <div class="main-content__grid-wrapper">
      </div>
    `;
  }

  setEvent() {
    this.$ele.addEventListener('click', ({ target }) => {
      const { pressTabType } = this.props;
      const { currentPage, totalPages } = gridPageStore.getState()[pressTabType];

      if (target.id === 'grid-before-btn') {
        gridPageStore.dispatch({
          type: 'beforePage',
          payload: { pressTabType, currentPage, totalPages }
        });
      }
      if (target.id === 'grid-next-btn') {
        gridPageStore.dispatch({
          type: 'nextPage',
          payload: { pressTabType, currentPage, totalPages }
        });
      }
    });
  }
}

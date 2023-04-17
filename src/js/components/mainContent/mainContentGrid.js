import { $ } from '../../utils/dom.js';
import { getChucks } from '../../utils/getData.js';
import { tabStore, gridPageStore } from '../../store/index.js';
import PressGrid from './pressGrid.js';

export default class MainContentGrid {
  #gridItemCount = 24;

  #imgSrc = {
    beforeBtn: 'src/images/before_btn.svg',
    nextBtn: 'src/images/next_btn.svg'
  };

  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('section');
    this.$ele.className = 'main-content__grid';

    this.props = props;

    this.pressGridCollection;
  }

  mount() {
    const { pressTabType, pressData } = this.props;
    const pressChucks = getChucks({ arr: pressData, count: this.#gridItemCount });

    this.render();

    const $gridWrapper = $({ selector: '.main-content__grid-wrapper', parent: this.$ele });
    this.pressGridCollection = pressChucks.map(
      (chuck, idx) => new PressGrid($gridWrapper, { pressTabType, page: idx, gridItemsData: chuck })
    );
    if (this.pressGridCollection.length === 0)
      this.pressGridCollection.push(
        new PressGrid($gridWrapper, { pressTabType, page: 0, gridItemsData: [] })
      );
    this.pressGridCollection.forEach((pressGrid) => pressGrid.mount());

    gridPageStore.dispatch({
      type: 'initGridPage',
      payload: {
        pressTabType,
        currentPage: 0,
        totalPages: this.pressGridCollection.length === 0 ? 1 : this.pressGridCollection.length
      }
    });

    this.initDisplay();
    gridPageStore.register(this.setDisplayBtn.bind(this));
    tabStore.register(this.setDisplayElement.bind(this));

    this.setEvent();
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  initDisplay() {
    const { pressTabType } = this.props;
    const { activePressTab, activeShowTab } = tabStore.getState();
    const { currentPage, totalPages } = gridPageStore.getState()[pressTabType];

    const $beforeBtn = $({ selector: '.main-content__grid-before-btn', parent: this.$ele });
    const $nextBtn = $({ selector: '.main-content__grid-next-btn', parent: this.$ele });

    if (activeShowTab !== 'grid' || pressTabType !== activePressTab) this.$ele.classList.add('display-none');
    if (currentPage === 0) $beforeBtn.classList.add('hidden');
    if (currentPage === totalPages - 1) $nextBtn.classList.add('hidden');
  }

  setDisplayElement() {
    const { pressTabType } = this.props;
    const { activePressTab, activeShowTab } = tabStore.getState();

    if (activeShowTab !== 'grid' || pressTabType !== activePressTab) this.$ele.classList.add('display-none');
    else this.$ele.classList.remove('display-none');
  }

  setDisplayBtn() {
    const { pressTabType } = this.props;
    const { currentPage, totalPages } = gridPageStore.getState()[pressTabType];

    const $beforeBtn = $({ selector: '.main-content__grid-before-btn', parent: this.$ele });
    const $nextBtn = $({ selector: '.main-content__grid-next-btn', parent: this.$ele });

    if (currentPage === 0) $beforeBtn.classList.add('hidden');
    else $beforeBtn.classList.remove('hidden');

    if (currentPage === totalPages - 1) $nextBtn.classList.add('hidden');
    else $nextBtn.classList.remove('hidden');
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    const { beforeBtn, nextBtn } = this.#imgSrc;

    return `
      <div class="main-content__grid-before-btn">
        <img src="${beforeBtn}" alt="before grid page" />
      </div>
      <div class="main-content__grid-next-btn">
        <img src="${nextBtn}" alt="next grid page" />
      </div>
      <div class="main-content__grid-wrapper">
      </div>
    `;
  }

  setEvent() {
    this.$ele.addEventListener('click', ({ target }) => {
      const { pressTabType } = this.props;
      const { currentPage, totalPages } = gridPageStore.getState()[pressTabType];

      if (target.alt === 'before grid page') {
        gridPageStore.dispatch({ type: 'beforePage', payload: { pressTabType, currentPage, totalPages } });
      }
      if (target.alt === 'next grid page') {
        gridPageStore.dispatch({ type: 'nextPage', payload: { pressTabType, currentPage, totalPages } });
      }
    });
  }
}

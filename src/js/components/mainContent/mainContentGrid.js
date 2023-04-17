import { $ } from '../../utils/dom.js';
import { gridPageStore } from '../../store/index.js';
import PressGrid from './pressGrid.js';

export default class MainContentGrid {
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
    const { pressTabType, pressChucks } = this.props;

    this.render();

    const $gridWrapper = $({ selector: '.main-content__grid-wrapper', parent: this.$ele });
    this.pressGridCollection = pressChucks.map(
      (chuck, idx) => new PressGrid($gridWrapper, { pressTabType, page: idx, gridItemsData: chuck })
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

    this.setEvent();
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
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

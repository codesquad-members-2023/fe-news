import { $ } from '../../utils/dom.js';
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
    const { pressChucks } = this.props;

    this.render();
    const $gridWrapper = $({ selector: '.main-content__grid-wrapper', parent: this.$ele });
    this.pressGridCollection = pressChucks.map(
      (chuck) => new PressGrid($gridWrapper, { gridItemsData: chuck })
    );
    this.pressGridCollection.forEach((pressGrid) => pressGrid.mount());

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
}

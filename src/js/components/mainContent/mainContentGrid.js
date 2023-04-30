import { gridStore } from '../../store/index.js';

const isFirstPage = (currentPage) => currentPage === 0;
const isLastPage = (currentPage, totalPages) => currentPage === totalPages - 1;

export default class MainContentGrid {
  #imgSrc = {
    beforeBtn: 'src/images/before_btn.svg',
    nextBtn: 'src/images/next_btn.svg'
  };

  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('section');
    this.$mainEle.className = 'main-content__grid';

    this.props = props;

    this.children = new Set();
    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);
  }

  render() {
    this.removeChildren();

    this.$mainEle.innerHTML = this.template();
  }

  template() {
    const { beforeBtn, nextBtn } = this.#imgSrc;
    const { currentPage, totalPages } = gridStore.getState();

    return `
      <div class="main-content__grid-before-btn ${isFirstPage(currentPage) ? 'hidden' : ''}">
        <img id="grid-before-btn" src="${beforeBtn}" alt="before grid page" />
      </div>
      <div class="main-content__grid-next-btn ${isLastPage(currentPage, totalPages) ? 'hidden' : ''}">
        <img id="grid-next-btn" src="${nextBtn}" alt="next grid page" />
      </div>
      <div class="main-content__grid-wrapper">
      </div>
    `;
  }

  remove() {
    this.$mainEle.remove();
    this.removeChildren();
  }

  removeChildren() {
    if (this.children.size === 0) return;

    this.children.forEach((child) => child.remove());
    this.children.clear();
  }
}

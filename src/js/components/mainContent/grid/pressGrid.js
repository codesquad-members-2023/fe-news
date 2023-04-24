import { gridPageStore } from '../../../store/index.js';
import PressGridItem from './pressGridItem.js';

export default class PressGrid {
  // Todo: #gridItemCount constants 폴더에 상수로 관리하기
  #gridItemCount = 24;

  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('div');
    this.$mainEle.className = 'press-grid';

    this.props = props;

    gridPageStore.register(this.displayElement.bind(this));
    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);
  }

  render() {
    const { gridItemsData } = this.props;

    for (let idx = 0; idx < this.#gridItemCount; idx += 1) {
      const data = gridItemsData[idx];

      new PressGridItem(this.$mainEle, data).render();
    }
  }

  displayElement() {
    const { pressTabType, page } = this.props;
    const { currentPage } = gridPageStore.getState()[pressTabType];

    if (currentPage !== page) this.$mainEle.classList.add('display-none');
    else this.$mainEle.classList.remove('display-none');
  }
}

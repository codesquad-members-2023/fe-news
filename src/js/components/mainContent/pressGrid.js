import { gridPageStore } from '../../store/index.js';
import PressGridItem from './pressGridItem.js';

export default class PressGrid {
  // Todo: #gridItemCount constants 폴더에 상수로 관리하기
  #gridItemCount = 24;

  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'press-grid';

    this.props = props;

    gridPageStore.register(this.displayElement.bind(this));
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  render() {
    const { gridItemsData } = this.props;

    for (let idx = 0; idx < this.#gridItemCount; idx += 1) {
      const data = gridItemsData[idx];

      new PressGridItem(this.$ele, data).render();
    }
  }

  displayElement() {
    const { pressTabType, page } = this.props;
    const { currentPage } = gridPageStore.getState()[pressTabType];

    if (currentPage !== page) this.$ele.classList.add('display-none');
    else this.$ele.classList.remove('display-none');
  }
}

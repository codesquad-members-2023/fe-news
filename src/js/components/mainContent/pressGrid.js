import { gridPageStore } from '../../store/index.js';
import PressGridItem from './pressGridItem.js';

export default class PressGrid {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'press-grid';

    this.props = props;

    this.gridItems;
  }

  mount() {
    const { gridItemsData } = this.props;

    gridPageStore.register(this.update.bind(this));

    this.gridItems = gridItemsData.map((data) => new PressGridItem(this.$ele, { ...data }));
    this.gridItems.forEach((item) => item.mount());

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  update() {
    const { pressTabType, page } = this.props;
    const { currentPage } = gridPageStore.getState()[pressTabType];
    if (currentPage !== page) this.$ele.classList.add('display-none');
    else this.$ele.classList.remove('display-none');
  }
}

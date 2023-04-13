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

    this.gridItems = gridItemsData.map((data) => new PressGridItem(this.$ele, { ...data }));
    this.gridItems.forEach((item) => item.mount());

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }
}

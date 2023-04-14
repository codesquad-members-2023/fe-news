import PressGrid from './pressGrid.js';

export default class MainContentGrid {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('section');
    this.$ele.className = 'main-content__grid';

    this.props = props;

    this.pressGridCollection;
  }

  mount() {
    const { pressChucks } = this.props;

    this.pressGridCollection = pressChucks.map((chuck) => new PressGrid(this.$ele, { gridItemsData: chuck }));
    this.pressGridCollection.forEach((pressGrid) => pressGrid.mount());

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }
}

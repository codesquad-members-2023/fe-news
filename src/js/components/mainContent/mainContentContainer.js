import MainContentGrid from './mainContentGrid.js';

export default class MainContentContainer {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'main-content__container';

    this.props = props;

    this.allGrid;
    this.subscribedGrid;
  }

  mount() {
    const { allPressData } = this.props;

    this.allGrid = new MainContentGrid(this.$ele, { pressTabType: 'all', allPressData });
    this.subscribedGrid = new MainContentGrid(this.$ele, {
      pressTabType: 'subscribed',
      allPressData
    });

    this.allGrid.mount();
    this.subscribedGrid.mount();

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }
}

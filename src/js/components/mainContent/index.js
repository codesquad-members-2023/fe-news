import MainContentHeader from './mainContentHeader.js';
import MainContentContainer from './mainContentContainer.js';

export default class MainContent {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('main');
    this.$ele.id = 'main-content';

    this.props = props;

    this.header;
    this.grid;
  }

  mount() {
    const { pressData } = this.props;

    this.header = new MainContentHeader(this.$ele);
    this.grid = new MainContentContainer(this.$ele, {
      allPressData: pressData
    });
    this.header.mount();
    this.grid.mount();

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }
}

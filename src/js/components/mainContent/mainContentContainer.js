import MainContentGrid from './mainContentGrid.js';

export default class MainContentContainer {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'main-content__container';

    this.props = props;

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  render() {
    const { allPressData } = this.props;

    new MainContentGrid(this.$ele, { pressTabType: 'all', allPressData }).render();
    new MainContentGrid(this.$ele, { pressTabType: 'subscribed', allPressData }).render();
  }
}

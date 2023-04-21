import MainContentGrid from './mainContentGrid.js';
import MainContentList from './mainContentList.js';

export default class MainContentContainer {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('div');
    this.$mainEle.className = 'main-content__container';

    this.props = props;

    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);
  }

  render() {
    const { allPressData } = this.props;

    new MainContentGrid(this.$mainEle, { pressTabType: 'all', allPressData }).render();
    new MainContentGrid(this.$mainEle, { pressTabType: 'subscribed', allPressData }).render();
    new MainContentList(this.$mainEle, { pressTabType: 'all', allPressData }).render();
  }
}

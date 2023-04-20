import MainContentHeader from './mainContentHeader.js';
import MainContentContainer from './mainContentContainer.js';

export default class MainContent {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('main');
    this.$ele.id = 'main-content';

    this.props = props;

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  render() {
    const { pressData } = this.props;

    new MainContentHeader(this.$ele).render();
    new MainContentContainer(this.$ele, { allPressData: pressData }).render();
  }
}

import MainContentHeader from './mainContentHeader.js';
import MainContentContainer from './mainContentContainer.js';

export default class MainContent {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('main');
    this.$mainEle.id = 'main-content';

    this.props = props;

    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);
  }

  render() {
    const { pressData } = this.props;

    new MainContentHeader(this.$mainEle).render();
    new MainContentContainer(this.$mainEle, { allPressData: pressData }).render();
  }
}

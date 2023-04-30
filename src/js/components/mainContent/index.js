import MainContentHeader from './mainContentHeader.js';
import { tabStore } from '../../store/index.js';

export default class MainContent {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('main');
    this.$mainEle.id = 'main-content';

    this.props = props;

    this.children = new Set();
    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);

    this.unregister = tabStore.register(() => this.render());
  }

  render() {
    this.removeChildren();
    this.renderChildren();
  }

  renderChildren() {
    this.children.add(new MainContentHeader(this.$mainEle));

    this.children.forEach((child) => child.render());
  }

  removeChildren() {
    if (this.children.size === 0) return;

    this.children.forEach((child) => child.remove());
    this.children.clear();
  }
}

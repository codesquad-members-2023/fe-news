import MainContentHeader from './mainContentHeader.js';

export default class MainContent {
  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('main');
    this.$ele.id = 'main-content';

    this.header = new MainContentHeader(this.$ele);
  }

  mount() {
    this.header.mount();
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }
}

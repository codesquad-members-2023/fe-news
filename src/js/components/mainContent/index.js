import MainContentHeader from './mainContentHeader.js';

export default class MainContent {
  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('main');
    this.$ele.id = 'main-content';

    this.header = new MainContentHeader(this.$ele);
  }

  initRender() {
    this.header.initRender();
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }
}

import PressTab from './pressTab.js';
import ShowTab from './showTab.js';

export default class MainContentHeader {
  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('header');
    this.$ele.className = 'main-content__header';

    this.pressTab;
    this.showTab;
  }

  mount() {
    this.pressTab = new PressTab(this.$ele);
    this.showTab = new ShowTab(this.$ele);
    this.pressTab.mount();
    this.showTab.mount();

    this.$parent.insertAdjacentElement('afterbegin', this.$ele);
  }
}

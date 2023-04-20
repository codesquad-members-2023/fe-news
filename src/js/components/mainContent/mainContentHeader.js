import PressTab from './tab/pressTab.js';
import ShowTab from './tab/showTab.js';

export default class MainContentHeader {
  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('header');
    this.$ele.className = 'main-content__header';

    this.$parent.insertAdjacentElement('afterbegin', this.$ele);
  }

  render() {
    new PressTab(this.$ele).render();
    new ShowTab(this.$ele).render();
  }
}

import PressTab from './tab/pressTab.js';
import ShowTab from './tab/showTab.js';

export default class MainContentHeader {
  constructor($parent) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('header');
    this.$mainEle.className = 'main-content__header';

    this.$parent.insertAdjacentElement('afterbegin', this.$mainEle);
  }

  render() {
    new PressTab(this.$mainEle).render();
    new ShowTab(this.$mainEle).render();
  }
}

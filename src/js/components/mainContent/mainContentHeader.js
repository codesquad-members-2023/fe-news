export default class MainContentHeader {
  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('header');
    this.$ele.className = 'main-content__header';
  }

  mount() {
    this.render();
    this.$parent.insertAdjacentElement('afterbegin', this.$ele);
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    return /* html */ `
      <div class="press-tab">
        <span class="press-tab-btn active">전체 언론사</span>
        <span class="press-tab-btn">내가 구독한 언론사</span>
      </div>
      <div class="show-tab">
        <img class="show-tab__list" src="../../../src/images/list_gray.svg">
        <img class="show-tab__grid" src="../../../src/images/grid_blue.svg">
      </div>
    `;
  }
}

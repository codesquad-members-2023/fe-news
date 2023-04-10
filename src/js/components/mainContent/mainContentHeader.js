export default class MainContentHeader {
  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('header');
    this.$ele.className = 'main-content__header';

    this.state = {
      pressTabs: [
        { contents: '전체 언론사', isClicked: true },
        { contents: '내가 구독한 언론사', isClicked: false }
      ]
    };
  }

  initRender() {
    this.render();
    this.$parent.insertAdjacentElement('afterbegin', this.$ele);
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    const { pressTabs } = this.state;
    const pressTabsTemplate = pressTabs
      .map(
        ({ contents, isClicked }) =>
          `<span class="press-tab-btn ${isClicked ? 'active' : ''}">${contents}</span>`
      )
      .join('');
    return /* html */ `
      <div class="press-tab">
        ${pressTabsTemplate}
      </div>
      <div class="show-tab">
        <img class="show-tab__list" src="../../../src/images/list_gray.svg">
        <img class="show-tab__grid" src="../../../src/images/grid_blue.svg">
      </div>
    `;
  }
}

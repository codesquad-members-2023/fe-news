import { tabStore } from '../../store/index.js';

export default class ShowTab {
  #imgSrc = {
    listBlue: 'src/images/list_blue.svg',
    listGray: 'src/images/list_gray.svg',
    gridBlue: 'src/images/grid_blue.svg',
    gridGray: 'src/images/grid_gray.svg'
  };

  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'show-tab';

    this.$parent.insertAdjacentElement('beforeend', this.$ele);

    tabStore.register(this.render.bind(this));
  }

  render() {
    this.$ele.innerHTML = this.template();
    this.setEvent();
  }

  template() {
    const { activeShowTab } = tabStore.getState();
    const { listBlue, listGray, gridBlue, gridGray } = this.#imgSrc;

    return /* html */ `
      <img class="show-tab-btn show-tab__list" src="${activeShowTab === 'list' ? listBlue : listGray}">
      <img class="show-tab-btn show-tab__grid" src="${activeShowTab === 'grid' ? gridBlue : gridGray}">
    `;
  }

  setEvent() {
    this.$ele.addEventListener('click', ({ target }) => {
      const targetClassList = target.classList;
      const { activeShowTab } = tabStore.getState();

      if (targetClassList.contains('show-tab__grid') && activeShowTab === 'list')
        tabStore.dispatch({ type: 'toggleShowTab', payload: 'grid' });
      if (targetClassList.contains('show-tab__list') && activeShowTab === 'grid')
        tabStore.dispatch({ type: 'toggleShowTab', payload: 'list' });
    });
  }
}

import { tabStore } from '../../store/tabStore.js';

export default class MainContentHeader {
  #imgSrc = {
    listBlue: 'src/images/list_blue.svg',
    listGray: 'src/images/list_gray.svg',
    gridBlue: 'src/images/grid_blue.svg',
    gridGray: 'src/images/grid_gray.svg'
  };

  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('header');
    this.$ele.className = 'main-content__header';
  }

  mount() {
    this.render();
    this.setEvent();
    this.$parent.insertAdjacentElement('afterbegin', this.$ele);
    tabStore.register(this.render.bind(this));
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    const { activePressTab, activeShowTab } = tabStore.getState();
    const { listBlue, listGray, gridBlue, gridGray } = this.#imgSrc;

    return /* html */ `
      <div class="press-tab">
        <span class="press-tab-btn press-tab__all ${
          activePressTab === 'all' ? 'active' : ''
        }">전체 언론사</span>
        <span class="press-tab-btn press-tab__subscribed ${
          activePressTab === 'subscribed' ? 'active' : ''
        }">내가 구독한 언론사</span>
      </div>
      <div class="show-tab">
        <img class="show-tab-btn show-tab__list" src="${activeShowTab === 'list' ? listBlue : listGray}">
        <img class="show-tab-btn show-tab__grid" src="${activeShowTab === 'grid' ? gridBlue : gridGray}">
      </div>
    `;
  }

  setEvent() {
    this.$ele.addEventListener('click', ({ target }) => {
      const targetClassList = target.classList;
      const { activePressTab, activeShowTab } = tabStore.getState();

      if (targetClassList.contains('press-tab__all') && activePressTab === 'subscribed')
        tabStore.dispatch({ type: 'togglePressTab', payload: 'all' });
      if (targetClassList.contains('press-tab__subscribed') && activePressTab === 'all')
        tabStore.dispatch({ type: 'togglePressTab', payload: 'subscribed' });
      if (targetClassList.contains('show-tab__grid') && activeShowTab === 'list')
        tabStore.dispatch({ type: 'toggleShowTab', payload: 'grid' });
      if (targetClassList.contains('show-tab__list') && activeShowTab === 'grid')
        tabStore.dispatch({ type: 'toggleShowTab', payload: 'list' });
    });
  }
}

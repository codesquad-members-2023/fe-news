import { tabStore } from '../../store/index.js';

export default class PressTab {
  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'press-tab';
  }

  mount() {
    this.render();
    this.setEvent();
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
    tabStore.register(this.render.bind(this));
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    const { activePressTab } = tabStore.getState();

    return /* html */ `
    <span class="press-tab-btn press-tab__all ${activePressTab === 'all' ? 'active' : ''}">전체 언론사</span>
    <span class="press-tab-btn press-tab__subscribed ${
      activePressTab === 'subscribed' ? 'active' : ''
    }">내가 구독한 언론사</span>
    `;
  }

  setEvent() {
    this.$ele.addEventListener('click', ({ target }) => {
      const targetClassList = target.classList;
      const { activePressTab } = tabStore.getState();

      if (targetClassList.contains('press-tab__all') && activePressTab === 'subscribed')
        tabStore.dispatch({ type: 'togglePressTab', payload: 'all' });
      if (targetClassList.contains('press-tab__subscribed') && activePressTab === 'all')
        tabStore.dispatch({ type: 'togglePressTab', payload: 'subscribed' });
    });
  }
}

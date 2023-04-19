import { domUtils } from '../../utils/index.js';
import { subscriptionListStore } from '../../store/index.js';

export default class PressGridItem {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'press-grid__item';

    this.props = props;
  }

  mount() {
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
    // * 만약 props에 담은 정보가 없다면 아무것도 들어있지 않은 grid item을 만들기 위해 return
    if (!this.props) return;
    const { pressName } = this.props;
    this.render();
    this.setEvent();
    subscriptionListStore.register({ listenerType: pressName, listenerCallBack: this.update.bind(this) });
  }

  update() {
    this.render();
    this.setEvent();
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    const { pressName, pressLogo } = this.props;
    const { subscriptionList } = subscriptionListStore.getState();
    const isSubscribed = subscriptionList.has(pressName);

    return /* html */ `
      <img class="press-logo" src="${pressLogo}" alt="${pressName}"/>
      <div class="subscribe-toggle-btn-container">
        <button class="subscribe-toggle-btn ${isSubscribed ? 'unsubscribe-btn' : 'subscribe-btn'}">+ ${
      isSubscribed ? '해지하기' : '구독하기'
    }</button>
      </div>
    `;
  }

  setEvent() {
    const { $ } = domUtils;
    const $subscribeToggleBtn = $({ selector: '.subscribe-toggle-btn', parent: this.$ele });

    $subscribeToggleBtn.addEventListener('click', ({ target }) => {
      const { pressName } = this.props;

      if (target.classList.contains('subscribe-btn')) {
        subscriptionListStore.dispatch({
          listenerType: pressName,
          action: { type: 'addSubscription', payload: pressName }
        });
      }

      if (target.classList.contains('unsubscribe-btn')) {
        subscriptionListStore.dispatch({
          listenerType: pressName,
          action: { type: 'deleteSubscription', payload: pressName }
        });
      }
    });
  }
}

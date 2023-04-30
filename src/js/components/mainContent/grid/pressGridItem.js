import { subscriptionStore, SUBSCRIPTION_ACTION_TYPES } from '../../../store/index.js';

export default class PressGridItem {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('div');
    this.$mainEle.className = 'press-grid__item';

    this.props = props;

    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);
  }

  render() {
    if (!this.props) return;

    this.$mainEle.innerHTML = this.template();
    this.setEvent();
  }

  template() {
    const { pressName: currentPressName, pressLogo: currentPressLogo } = this.props;
    const { subscriptionList } = subscriptionStore.getState();
    const subscribedPressNames = subscriptionList.map(({ pressName }) => pressName);

    const isSubscribed = subscribedPressNames.includes(currentPressName);
    const btnText = isSubscribed ? '해지하기' : '구독하기';

    return /* html */ `
      <img class="press-logo" src="${currentPressLogo}" alt="${currentPressName}"/>
      <div class="subscribe-toggle-btn-container">
        <button class="subscribe-toggle-btn ${
          isSubscribed ? 'unsubscribe-btn' : 'subscribe-btn'
        }">+ ${btnText}</button>
      </div>
    `;
  }

  setEvent() {
    const $subscribeToggleBtn = this.$mainEle.querySelector('.subscribe-toggle-btn');
    const actionByTarget = {
      'subscribe-btn': SUBSCRIPTION_ACTION_TYPES.ADD_SUBSCRIPTION,
      'unsubscribe-btn': SUBSCRIPTION_ACTION_TYPES.DELETE_SUBSCRIPTION
    };

    $subscribeToggleBtn.addEventListener('click', ({ target }) => {
      const { classList } = target;
      const itemData = this.props;
      let actionKey;

      if (classList.contains('subscribe-btn')) actionKey = 'subscribe-btn';
      else if (classList.contains('unsubscribe-btn')) actionKey = 'unsubscribe-btn';

      if (actionKey) {
        subscriptionStore.dispatch({
          type: actionByTarget[actionKey],
          payload: itemData
        });

        // ? subscriptionStore에 render 메소드 등록 고민
        this.render();
      }
    });
  }

  remove() {
    this.$mainEle.remove();
  }
}

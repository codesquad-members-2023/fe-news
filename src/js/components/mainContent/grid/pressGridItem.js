import { subscriptionStore } from '../../../store/index.js';

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

  remove() {
    this.$mainEle.remove();
  }
}

import { $ } from '../../utils/dom.js';

export default class PressGridItem {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'press-grid__item';

    this.props = props;
  }

  mount() {
    this.render();
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
    this.setEvent();
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    const { pressName, pressLogo, isSubscribed } = this.props;

    return /* html */ `
      <img class="press-logo" src="${pressLogo}" alt="${pressName}"/>
      <div class="subscribe-toggle-btn-container">
        <button class="subscribe-toggle-btn">+ ${isSubscribed ? '해지하기' : '구독하기'}</button>
      </div>
    `;
  }

  setEvent() {
    const $subscribeToggleBtn = $({ selector: '.subscribe-toggle-btn', parent: this.$ele });
    $subscribeToggleBtn.addEventListener('click', () => {
      // 확인
      console.log('click');
    });
  }
}

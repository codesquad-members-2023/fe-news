import { $ } from '../../utils/dom.js';

export default class NavBar {
  #startIdx = 0;

  #startTime = null;

  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'nav-bar';

    this.props = props;
    this.state = {};

    this.initState();
  }

  mount() {
    this.render();
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
    this.setEvent();
    this.setAutoRolling();
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  setAutoRolling() {
    const { navBarData } = this.props;
    const { headLines } = navBarData;
    const $headLineWrapper = $({
      selector: '.nav-bar__headLine-wrapper',
      parent: this.$ele
    });

    const autoRolling = (timestamp) => {
      if (!this.#startTime) this.#startTime = timestamp;

      const progress = timestamp - this.#startTime;

      if (progress > 5000) {
        this.setState({ currentIdx: (this.state.currentIdx + 1) % 5 });
        const { currentIdx } = this.state;
        // ! 렌더링 관련 부분 리팩토링 => headLineWrapper 자식 요소들 component로 만들 예정
        $headLineWrapper.insertAdjacentHTML(
          'beforeend',
          `<a href="">${headLines[currentIdx]}</a>`
        );

        $headLineWrapper.classList.add('rolling');
        this.#startTime = null;
      }
      requestAnimationFrame(autoRolling);
    };

    requestAnimationFrame(autoRolling);
  }

  template() {
    const { navBarData } = this.props;
    const { press, headLines } = navBarData;
    const { currentIdx } = this.state;

    return /* html */ `
      <a href="" class="nav-bar__press">${press}</a>
      <div class="nav-bar__headLine">
        <div class="nav-bar__headLine-wrapper">
          <a href="">${headLines[currentIdx]}</a>
        </div>
      </div>
    `;
  }

  initState() {
    this.state = { currentIdx: this.#startIdx };
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  setEvent() {
    const $headLineWrapper = $({
      selector: '.nav-bar__headLine-wrapper',
      parent: this.$ele
    });

    $headLineWrapper.addEventListener('transitionend', ({ currentTarget }) => {
      // ! 렌더링 관련 부분 리팩토링
      const firstElement = currentTarget.firstElementChild;
      currentTarget.removeChild(firstElement);
      currentTarget.classList.remove('rolling');
    });
  }
}

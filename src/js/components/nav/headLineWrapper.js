export default class HeadLineWrapper {
  #startIdx = 0;

  #startTime = null;

  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('div');
    this.$mainEle.className = 'nav-bar__headLine-wrapper';

    this.props = props;
    this.state = {};
    this.initState();

    this.setEvent();
    this.setAutoRolling();
    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);
  }

  render() {
    const { isRolling } = this.state;

    if (isRolling) this.$mainEle.classList.add('rolling');
    else this.$mainEle.classList.remove('rolling');

    this.$mainEle.innerHTML = this.template();
  }

  update({ newState }) {
    this.setState(newState);
    this.render();
  }

  template() {
    const { headLines } = this.props;
    const { currentIdx, nextIdx, isRolling } = this.state;

    return /* html */ `
      <a href="">${headLines[currentIdx]}</a>
      ${isRolling ? `<a href="">${headLines[nextIdx]}</a>` : ''}
    `;
  }

  initState() {
    const { headLines } = this.props;
    this.state = {
      currentIdx: this.#startIdx,
      nextIdx: this.#startIdx + 1,
      count: headLines.length,
      isRolling: false
    };
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  setEvent() {
    this.$mainEle.addEventListener('transitionend', () => {
      const { currentIdx, nextIdx, count } = this.state;
      this.update({
        newState: {
          currentIdx: (currentIdx + 1) % count,
          nextIdx: (nextIdx + 1) % count,
          isRolling: false
        }
      });
    });
  }

  setAutoRolling() {
    const autoRolling = (timestamp) => {
      if (!this.#startTime) this.#startTime = timestamp;

      const progress = timestamp - this.#startTime;

      if (progress > 5000) {
        this.update({ newState: { isRolling: true } });

        this.#startTime = null;
      }
      requestAnimationFrame(autoRolling);
    };

    requestAnimationFrame(autoRolling);
  }
}

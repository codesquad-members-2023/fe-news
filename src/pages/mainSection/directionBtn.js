class DirectionBtn extends HTMLElement {
  #state = {
    currentPage: 0,
    lastPage: 1
  }

  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const { currentPage, lastPage } = this.#state

    this.innerHTML = `
      <button class="left-btn ${currentPage === 0 ? 'hidden' : ''}">
        <img src="./asset/LeftButton.svg" alt="LeftButton">
      </button>
      <button class="right-btn ${currentPage === lastPage - 1 ? 'hidden' : ''}">
        <img src="./asset/RightButton.svg" alt="RightButton">
      </button>
    `
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'last-page') {
      this.#state.lastPage = Number(newValue)
    }

    if (name === 'page') {
      this.#state.currentPage = Number(newValue)
    }

    this.render()
  }

  static get observedAttributes() {
    return ['last-page', 'page']
  }
}

customElements.define('ns-direction-btn', DirectionBtn)

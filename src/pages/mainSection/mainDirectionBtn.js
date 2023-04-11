class MainDirectionBtn extends HTMLElement {
  pageRange
  #currentPage = 1

  constructor() {
    super()
  }

  connectedCallback() {
    this.setAttribute('page', this.#currentPage)
    this.innerHTML = `
      <button class="left-btn hidden">
        <img src="./asset/LeftButton.svg" alt="LeftButton">
      </button>
      <button class="right-btn">
        <img src="./asset/RightButton.svg" alt="RightButton">
      </button>
    `
  }

  attributeChangedCallback() {
    const FIRST_PAGE = '1'
    const LAST_PAGE = '4'

    const currentPage = this.getAttribute('page')
    const leftBtn = this.firstElementChild
    const rightBtn = this.lastElementChild

    if (leftBtn && rightBtn) {
      this.#showButton([leftBtn, rightBtn])

      if (currentPage === FIRST_PAGE) {
        this.#hiddenButton(leftBtn)
        return
      }

      if (currentPage === LAST_PAGE) {
        this.#hiddenButton(rightBtn)
      }
    }
  }

  static get observedAttributes() {
    return ['page']
  }

  #hiddenButton(button) {
    button.classList.add('hidden')
  }

  #showButton(buttons) {
    buttons.forEach(button => button.classList.remove('hidden'))
  }
}

customElements.define('ns-direction-btn', MainDirectionBtn)

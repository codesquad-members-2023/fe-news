class DirectionBtn extends HTMLElement {
  pageRange

  constructor() {
    super()
  }

  connectedCallback() {
    const INIT_PAGE = 1

    this.setAttribute('page', INIT_PAGE)
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
    const prevButton = this.firstElementChild
    const nextButton = this.lastElementChild

    if (prevButton && nextButton) {
      this.#showButton([prevButton, nextButton])

      if (currentPage <= FIRST_PAGE) {
        this.#hiddenButton(prevButton)
      }

      if (currentPage === LAST_PAGE) {
        this.#hiddenButton(nextButton)
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

customElements.define('ns-direction-btn', DirectionBtn)

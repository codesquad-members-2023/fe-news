import { createNode } from '../../script/utils.js'

class PressCellView extends HTMLElement {
  #container
  pressesData

  constructor() {
    super()
  }

  connectedCallback() {
    this.#container = createNode('div')
    this.appendChild(this.#container)

    if (this.pressesData) {
      const logo = createNode('img')

      logo.src = this.pressesData.logoId
      logo.alt = this.pressesData.name

      this.#container.appendChild(logo)
    }
  }
}

customElements.define('ns-main-grid-cell', PressCellView)

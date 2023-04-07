import { createNode } from '../script/utils.js'

class MainGridCellUI extends HTMLElement {
  #container
  mainGridBlockData

  constructor() {
    super()
  }

  connectedCallback() {
    this.#container = createNode('div')
    this.appendChild(this.#container)

    const logo = createNode('img')
    logo.src = this.mainGridBlockData.logoId
    logo.alt = this.mainGridBlockData.name

    this.#container.appendChild(logo)
  }
}

customElements.define('ns-main-grid-cell', MainGridCellUI)

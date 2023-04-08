import { createNode } from '../../script/utils.js'

class MainGridCellUI extends HTMLElement {
  #container
  mainGridCellData

  constructor() {
    super()
  }

  connectedCallback() {
    this.#container = createNode('div')
    this.appendChild(this.#container)

    const logo = createNode('img')

    logo.src = this.mainGridCellData.logoId
    logo.alt = this.mainGridCellData.name

    this.#container.appendChild(logo)
  }
}

customElements.define('ns-main-grid-cell', MainGridCellUI)

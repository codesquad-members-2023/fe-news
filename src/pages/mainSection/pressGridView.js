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

    // TODO:
    // 여기부턴 어떠한 상태(언론사 없음)을 받아서
    // true인 것만 처리하도록 해야겠다.
    const logo = createNode('img')

    logo.src = this.pressesData.logoId
    logo.alt = this.pressesData.name

    this.#container.appendChild(logo)
  }
}

customElements.define('ns-main-grid-cell', PressCellView)

import { createNode } from '../script/utils.js'

class mainGridBlockUI extends HTMLElement {
  #container
  mainGridBlockData

  constructor() {
    super()
  }

  connectedCallback() {
    this.#container = createNode('div')
    this.appendChild(this.#container)

    const logo = createNode('img')
    // TODO: 상위에서 data 받아서 아래 코드로 변경
    // logo.src = this.mainGridBlockImg.logoId
    // logo.alt = this.mainGridBlockData.name
    logo.src =
      'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/823.png'
    logo.alt = 'UPI뉴스'
    this.#container.appendChild(logo)
  }
}

customElements.define('ns-main-grid-block', mainGridBlockUI)

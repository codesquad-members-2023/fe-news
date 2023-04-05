import { createNode } from '../script/utils.js'

class HeaderUI extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const container = createNode('div')
    this.appendChild(container)

    const icon = createNode('img')
    icon.src = '../../asset/logo.svg'
    icon.alt = 'logo'
    container.appendChild(icon)

    const title = createNode('span')
    title.textContent = '뉴스스탠드'
    title.classList.add('display')
    container.appendChild(title)

    const today = createNode('span')
    today.textContent = '2023. 03. 03. 월요일'
    today.classList.add('body-md')
    container.appendChild(today)
  }
}

customElements.define('ns-header', HeaderUI)

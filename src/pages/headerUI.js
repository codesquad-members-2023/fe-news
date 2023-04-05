import { createNode } from '../script/utils.js'
import HeaderHandler from './header.js'

class HeaderUI extends HTMLElement {
  #headerData
  #container

  constructor() {
    super()

    const handler = new HeaderHandler()
    this.#headerData = handler.getData()
  }

  connectedCallback() {
    this.#container = createNode('div')
    this.appendChild(this.#container)

    this.#createTitleSection()
    this.#createDateSection()
  }

  #createTitleSection() {
    const container = createNode('div')

    const icon = createNode('img')
    icon.src = this.#headerData.icon
    icon.alt = 'logo'
    container.appendChild(icon)

    const title = createNode('span')
    title.textContent = this.#headerData.title
    title.classList.add('display')
    container.appendChild(title)

    this.#container.appendChild(container)
  }

  #createDateSection() {
    const container = createNode('div')
    container.classList.add('todayDate')

    const today = createNode('span')
    today.textContent = this.#headerData.date
    today.classList.add('body-md')
    container.appendChild(today)

    this.#container.appendChild(container)
  }
}

customElements.define('ns-header', HeaderUI)
export default HeaderUI

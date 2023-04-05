import { createNode } from '../script/utils.js'
import HeaderHandler from './header.js'

class HeaderUI extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const handler = new HeaderHandler()
    const handlerData = handler.getData()

    const container = createNode('div')
    this.appendChild(container)

    const icon = createNode('img')
    icon.src = handlerData.icon
    icon.alt = 'logo'
    container.appendChild(icon)

    const title = createNode('span')
    title.textContent = handlerData.title
    title.classList.add('display')
    container.appendChild(title)

    const today = createNode('span')
    today.textContent = handlerData.date
    today.classList.add('body-md')
    container.appendChild(today)
  }
}

customElements.define('ns-header', HeaderUI)
export default HeaderUI

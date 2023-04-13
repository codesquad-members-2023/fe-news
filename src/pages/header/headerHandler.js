import { getElement, createNode } from '../../script/utils.js'

class HeaderHandler {
  #header

  constructor() {
    this.#setHeader()
  }

  #setHeader() {
    const app = getElement('.app')

    this.#header = createNode('ns-header')
    this.#header.headerData = {
      icon: '../../asset/logo.svg',
      title: '뉴스스탠드',
      date: this.#getFormattedDate()
    }

    app.append(this.#header)
  }

  #getFormattedDate() {
    const today = new Date()
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
    const formattedDate = today.toLocaleDateString('ko-KR', options)

    return formattedDate
  }
}

export default HeaderHandler

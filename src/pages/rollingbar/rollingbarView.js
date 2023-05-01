import { createNode } from '../../script/utils.js'

class Rollingbar {
  #rollingbar

  constructor(data) {
    this.#render(data)
  }

  #render(data) {
    const container = createNode('div')
    container.classList.add('rollingbar')
    container.innerHTML = this.#template(data)

    this.#rollingbar = container
  }

  #template(data) {
    return `
      <div class="rolling-news">
        <div class="rolling-press title-sm">${data.pressName}</div>
        <a class="rolling-headline body-sm"
          >${data.headline[0]}</a
        >
      </div>
      <div class="rolling-news">
        <div class="rolling-press title-sm">${data.pressName}</div>
        <a class="rolling-headline body-sm"
          >${data.headline[1]}</a
        >
      </div>
    `
  }

  getRollingbar() {
    return this.#rollingbar
  }
}

export default Rollingbar

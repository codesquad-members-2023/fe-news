import { createNode } from '../../script/utils.js'

class PressesGridView {
  #mainGridView

  constructor(data) {
    this.#createGrid(data)
  }

  #createGrid(pressesData) {
    this.#mainGridView = createNode('div')
    this.#mainGridView.classList.add('main-grid', 'current-view')

    const data = new Array(24).fill(null)
    pressesData.forEach((pressData, i) => {
      data[i] = pressData
    })

    data.forEach(press => {
      if (!press) {
        this.createEmptyGridCell()
        return
      }

      this.#createGridCell({
        logoId: press.logo_src,
        name: press.name,
        isSubscription: press.isSubscription
      })
    })
  }

  #createGridCell(data) {
    const container = document.createElement('div')
    container.classList.add('grid-cell', 'press__info')

    const subscribeBtnCell = document.createElement('ns-main-grid-cell')
    subscribeBtnCell.classList.add('subscribe-btn', 'subscribe-grid', 'none')
    subscribeBtnCell.pressesData = {
      logoId: data.isSubscription
        ? './asset/unsubscribeButton.svg'
        : './asset/SubscribeButton.svg',
      name: data.isSubscription ? 'subscription' : 'cancellation'
    }
    container.appendChild(subscribeBtnCell)

    const pressCell = document.createElement('ns-main-grid-cell')
    pressCell.classList.add('press')
    pressCell.pressesData = {
      logoId: data.logoId,
      name: data.name
    }
    container.appendChild(pressCell)

    this.#mainGridView.appendChild(container)
  }

  createEmptyGridCell() {
    const container = createNode('div')
    const emptyCell = createNode('ns-main-grid-cell')

    container.appendChild(emptyCell)
    this.#mainGridView.appendChild(container)
  }

  getGridView() {
    return this.#mainGridView
  }
}

export default PressesGridView

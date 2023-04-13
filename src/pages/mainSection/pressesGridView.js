import { createNode } from '../../script/utils.js'

class PressesGridView {
  #mainGridView

  constructor(data) {
    this.#createGrid(data)
  }

  #createGrid(data) {
    this.#mainGridView = createNode('div')
    this.#mainGridView.classList.add('main-grid', 'current-view')

    // 무조건 24번 만들게해야 될 것 같다.
    data.forEach(press => {
      this.#createGridCell({
        logoId: press.logo_src,
        name: press.name,
        isSubscription: press.isSubscription
      })
    })
  }

  #createGridCell(data) {
    const container = createNode('div')
    container.classList.add('grid-cell')

    const subCell = createNode('ns-main-grid-cell')
    subCell.classList.add('subscribe-btn', 'none')
    subCell.mainGridCellData = {
      logoId: data.isSubscription
        ? './asset/unsubscribeButton.svg'
        : './asset/SubscribeButton.svg',
      name: data.isSubscription ? 'subscription' : 'unsubscription'
    }

    container.appendChild(subCell)

    const mainCell = createNode('ns-main-grid-cell')
    mainCell.classList.add('press')
    mainCell.mainGridCellData = {
      logoId: data.logoId,
      name: data.name
    }
    container.appendChild(mainCell)

    this.#mainGridView.appendChild(container)
  }

  getGridView() {
    return this.#mainGridView
  }
}

export default PressesGridView

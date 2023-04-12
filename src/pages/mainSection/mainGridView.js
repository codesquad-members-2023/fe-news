import { createNode } from '../../script/utils.js'

class MainGridView {
  #mainGridView

  constructor(data) {
    this.#createGrid(data)
  }

  #createGrid(data) {
    this.#mainGridView = createNode('div')
    this.#mainGridView.classList.add('main-grid', 'current-view')

    data.forEach(press => {
      this.#createGridCell(press.logo_src, press.name)
    })
  }

  #createGridCell(logoId, name) {
    const container = createNode('div')
    container.classList.add('grid-cell')

    const subCell = createNode('ns-main-grid-cell')
    subCell.classList.add('subscribe-btn', 'none')
    subCell.mainGridCellData = {
      logoId: './asset/SubscribeButton.svg',
      name: 'subscribe'
    }
    container.appendChild(subCell)

    const mainCell = createNode('ns-main-grid-cell')
    mainCell.classList.add('press')
    mainCell.mainGridCellData = {
      logoId,
      name
    }
    container.appendChild(mainCell)

    this.#mainGridView.appendChild(container)
  }

  getGridView() {
    return this.#mainGridView
  }
}

export default MainGridView

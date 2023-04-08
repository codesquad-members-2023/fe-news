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
    const gridCell = createNode('ns-main-grid-cell')
    gridCell.mainGridCellData = {
      logoId,
      name
    }

    this.#mainGridView.appendChild(gridCell)
  }

  getGridView() {
    return this.#mainGridView
  }
}

export default MainGridView

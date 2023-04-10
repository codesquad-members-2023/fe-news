import MainGridView from './mainGridView.js'
import { getElement, createNode } from '../../script/utils.js'

class MainView {
  #mainViewContainer
  currentView
  #data

  constructor(data) {
    this.app = getElement('.app')
    this.#mainViewContainer = createNode('div')
    this.#mainViewContainer.classList.add('main-view')

    this.#createDirectionBtn()
    this.#createGridView(data)
    this.app.appendChild(this.#mainViewContainer)
  }

  #createDirectionBtn() {
    const btn = createNode('ns-direction-btn')
    this.#mainViewContainer.appendChild(btn)
  }

  #createGridView(data) {
    this.currentView && this.#mainViewContainer.removeChild(this.currentView)

    const gridView = new MainGridView(data)
    this.currentView = gridView.getGridView()

    this.#mainViewContainer.appendChild(this.currentView)
  }

  #createListView(data) {}

  getCurrentView() {
    return this.currentView
  }
}

export default MainView

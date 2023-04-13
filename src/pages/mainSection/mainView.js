import PressesGridView from './pressesGridView.js'
import { getElement, createNode } from '../../script/utils.js'

class MainView {
  #mainViewContainer
  #directionButton
  currentView
  #currentPage

  constructor(data) {
    this.app = getElement('.app')
    this.#mainViewContainer = createNode('div')
    this.#mainViewContainer.classList.add('main-view')

    this.#createDirectionBtn()
    this.#createGridView(data)
    this.app.appendChild(this.#mainViewContainer)
  }

  #createDirectionBtn() {
    this.#directionButton = createNode('ns-direction-btn')
    this.#mainViewContainer.appendChild(this.#directionButton)
  }

  #createGridView(data) {
    this.currentView && this.#mainViewContainer.removeChild(this.currentView)

    const gridView = new PressesGridView(data)
    this.currentView = gridView.getGridView()

    this.#mainViewContainer.appendChild(this.currentView)
  }

  #createListView(data) {}

  setCurrentViewData(data) {
    this.#currentPage = data.currentPage
    this.setCurrentPage(this.#currentPage)
    this.#createGridView(data.currentViewData)
  }

  setCurrentPage(page) {
    this.#directionButton.setAttribute('page', page)
  }

  getCurrentView() {
    return this.currentView
  }
}

export default MainView

import { getElement, createNode } from '../../script/utils.js'
import PressesGridView from './pressesGridView.js'
import ViewSelectionBtn from './viewSelectionBtn.js'

class MainView {
  #mainViewContainer
  #viewSelectButton
  #directionButton
  currentView
  #currentPage

  constructor(data) {
    this.app = getElement('.app')
    this.#mainViewContainer = createNode('div')
    this.#mainViewContainer.classList.add('main-view')

    this.#createMainViewBtn()
    this.#createGridView(data)
    this.app.appendChild(this.#mainViewContainer)
  }

  #createMainViewBtn() {
    this.#viewSelectButton = new ViewSelectionBtn().createButtons()
    this.#mainViewContainer.appendChild(this.#viewSelectButton)

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
    // TODO: list or grid type을 받아서 처리해줘야 함
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

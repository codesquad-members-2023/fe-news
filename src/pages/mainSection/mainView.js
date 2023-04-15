import { getElement, createNode } from '../../script/utils.js'
import PressesGridView from './pressesGridView.js'
import PressListView from './pressListView.js'
import ViewSelectionBtn from './viewSelectionBtn.js'

class MainView {
  #mainViewContainer
  #viewSelectButton
  #directionButton
  #currentView
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
    this.#currentView && this.#mainViewContainer.removeChild(this.#currentView)

    const gridView = new PressesGridView(data)
    this.#currentView = gridView.getGridView()

    this.#mainViewContainer.appendChild(this.#currentView)
  }

  #createListView(data) {
    const pressListView = new PressListView(data)
    const listView = pressListView.getListView()

    this.#currentView.innerHTML = listView
  }

  setCurrentViewData(data) {
    this.#currentPage = data.currentPage
    this.#setCurrentPage(this.#currentPage)

    if (data.currentViewType === 'grid') {
      this.#directionButton.setAttribute(
        'last-page',
        Math.ceil(data.dataLength / 24)
      )
      this.#createGridView(data.currentViewData)

      return
    }

    if (data.currentViewType === 'list') {
      this.#createListView(data.currentViewData)
      this.#directionButton.setAttribute('last-page', data.dataLength - 1)
    }
  }

  #setCurrentPage(page) {
    this.#directionButton.setAttribute('page', page)
  }
}

export default MainView

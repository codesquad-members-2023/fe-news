import MainGridView from './mainGridView.js'
import { getElement, createNode } from '../../script/utils.js'

class MainView {
  currentView
  #data

  // constructor(viewType) {
  constructor(data) {
    this.app = getElement('.app')
    this.#createGridView(data)
  }

  #createGridView(data) {
    this.currentView && this.app.removeChild(this.currentView)

    const gridView = new MainGridView(data)
    this.currentView = gridView.getGridView()

    this.app.appendChild(this.currentView)
  }

  #createListView(data) {}

  getCurrentView() {
    return this.currentView
  }
}

export default MainView

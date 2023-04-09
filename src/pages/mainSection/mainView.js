import MainGridView from './mainGridView.js'
import { getElement, createNode } from '../../script/utils.js'

class MainView {
  #currentView
  #data

  // constructor(viewType) {
  constructor() {
    const app = getElement('.app')

    fetch('http://localhost:3001/presses')
      .then(res => res.json())
      .then(data => {
        const currentViewData = data.slice(0, 24)
        this.#currentView && app.removeChild(this.#currentView)

        const gridView = new MainGridView(currentViewData)
        this.#currentView = gridView.getGridView()

        app.appendChild(this.#currentView)
      })
  }

  getGridViewData() {}
}

export default MainView

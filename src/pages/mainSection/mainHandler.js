import { getElement } from '../../script/utils.js'
import MainView from './mainView.js'

class MainHandler {
  #data
  #mainView
  #currentViewData
  #currentPage = 1

  constructor() {
    this.#fetchData('http://localhost:3001/presses')
  }

  #fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.#data = data
        this.#initMainView()
        this.#goToNextPage()
      })
  }

  #initMainView() {
    this.#setGridDate(this.#data)

    const mainView = new MainView(this.#currentViewData)
    this.#mainView = mainView.getCurrentView()
  }

  #setGridDate(data) {
    const PRESSES_PER_PAGE = 24

    const endPress = PRESSES_PER_PAGE * this.#currentPage
    const startPress = endPress - PRESSES_PER_PAGE

    this.#currentViewData = data.slice(startPress, endPress)
  }

  #onSubscribe() {
    this.#mainView.addEventListener('click', () => {
      // get img alt
      // 구독 언론사에 추가
    })
  }

  #goToNextPage() {
    const button = getElement('ns-direction-btn')

    button.addEventListener('click', ({ target }) => {
      const clickedBtn = target.alt

      if (clickedBtn === 'RightButton') this.#currentPage++
      if (clickedBtn === 'LeftButton') this.#currentPage--

      button.setAttribute('page', this.#currentPage)
    })
  }
}

export default MainHandler

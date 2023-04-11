import { getElement } from '../../script/utils.js'
import MainView from './mainView.js'

class MainHandler {
  #data
  #mainView
  #currentView
  #currentViewData
  #currentPage = 1

  constructor() {
    this.#fetchData('http://localhost:3001/presses')
  }

  #fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.#data = this.#shuffleData(data)
        this.#initMainView()
        this.#onClickGridBtn()
      })
  }

  #shuffleData(data) {
    return data.sort(() => Math.random() - 0.5)
  }

  #initMainView() {
    this.#setGridDate()

    this.#mainView = new MainView(this.#currentViewData)
    this.#currentView = this.#mainView.getCurrentView()
  }

  #setGridDate() {
    const PRESSES_PER_PAGE = 24

    const endPress = PRESSES_PER_PAGE * this.#currentPage
    const startPress = endPress - PRESSES_PER_PAGE

    this.#currentViewData = this.#data.slice(startPress, endPress)
  }

  #onSubscribe() {
    this.#currentView.addEventListener('click', () => {
      // get img alt
      // 구독 언론사에 추가
    })
  }

  #onClickGridBtn() {
    const button = getElement('ns-direction-btn')

    button.addEventListener('click', ({ target }) => {
      const clickedBtn = target.alt

      if (clickedBtn === 'RightButton') this.#currentPage++
      if (clickedBtn === 'LeftButton') this.#currentPage--

      this.#setGridDate()
      this.#mainView.setCurrentViewData({
        currentPage: this.#currentPage,
        currentViewData: this.#currentViewData
      })
    })
  }
}

export default MainHandler

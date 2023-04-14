import { getElement } from '../../script/utils.js'
import MainView from './mainView.js'
class MainHandler {
  #data
  #mainView
  #currentView
  #currentViewType
  #currentViewData
  #currentPage
  #subscriptionList

  constructor(url) {
    this.#fetchData(url)
    this.#currentPage = 1
    this.#subscriptionList = new Set()
    this.#currentViewType = 'grid'
  }

  async #fetchData(url) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      this.#data = this.#shuffleData(data)
      this.#initMainView()
    } catch (error) {
      throw new Error(`Error occurred while fetching data: ${error}`)
    }
  }

  #shuffleData(data) {
    return data.sort(() => Math.random() - 0.5)
  }

  #initMainView() {
    this.#setGridViewDate(this.#data)

    this.#mainView = new MainView(this.#currentViewData)
    this.#currentView = this.#mainView.getCurrentView()
    this.#onClickGridBtn()
    this.#onMainViewEvent()
    this.onViewTypeEvent()
  }

  #onClickGridBtn() {
    const button = getElement('ns-direction-btn')

    button.addEventListener('click', ({ target }) => {
      const clickedBtn = target.alt

      if (clickedBtn === 'RightButton') this.#currentPage++
      if (clickedBtn === 'LeftButton') this.#currentPage--

      this.#renderGridView()
    })
  }

  #setGridViewDate(data) {
    const PRESSES_PER_PAGE = 24

    const endPress = PRESSES_PER_PAGE * this.#currentPage
    const startPress = endPress - PRESSES_PER_PAGE

    const slicedData = data.slice(startPress, endPress)

    this.#currentViewData = slicedData.map(press => {
      const isSubscription = [...this.#subscriptionList].includes(press.name)
      press.isSubscription = isSubscription

      return press
    })
  }

  #renderGridView() {
    this.#setGridViewDate(this.#data)
    this.#mainView.setCurrentViewData({
      currentPage: this.#currentPage,
      currentViewData: this.#currentViewData,
      currentViewType: this.#currentViewType
    })
  }

  #setListViewData(data) {
    this.#currentViewData = data[this.#currentPage]
  }

  #renderListView() {
    this.#setListViewData(this.#data)
    this.#mainView.setCurrentViewData({
      currentPage: this.#currentPage,
      currentViewData: this.#currentViewData,
      currentViewType: this.#currentViewType
    })
  }

  #onMainViewEvent() {
    const mainView = getElement('.main-view')

    const toggleSubscription = (target, className) => {
      const cell = target.closest('.grid-cell')
      // TODO: cell && subscription button
      if (cell) {
        cell.firstChild.classList.toggle(className)
        cell.lastChild.classList.toggle(className)
      }
    }

    mainView.addEventListener('mouseover', ({ target }) => {
      toggleSubscription(target, 'none')
    })

    mainView.addEventListener('mouseout', ({ target }) => {
      toggleSubscription(target, 'none')
    })

    mainView.addEventListener('click', ({ target }) => {
      const cell = target.closest('.grid-cell')
      const pressName = cell?.querySelector('.press img').alt
      const subscriptionStatus = cell?.querySelector('.subscribe-btn img').alt

      subscriptionStatus === 'subscription'
        ? this.#subscriptionList.delete(pressName)
        : this.#subscriptionList.add(pressName)

      this.#renderGridView()
    })
  }

  onViewTypeEvent() {
    const mainView = getElement('.main-view')
    mainView.addEventListener('click', ({ target }) => {
      const cell = target.closest('.view-type')
      const viewType = cell?.dataset?.type

      if (!viewType) return
      if (viewType === 'list') {
        this.#currentViewType = 'list'
        this.#renderListView()
      }

      if (viewType === 'my') {
        this.#currentPage = 1

        this.#currentViewData = this.#data
          .filter(press => [...this.#subscriptionList].includes(press.name))
          .map(press => {
            press.isSubscription = true
            return press
          })
        this.#mainView.setCurrentViewData({
          currentPage: this.#currentPage,
          currentViewData: this.#currentViewData
        })
      }
    })
  }
}

export default MainHandler

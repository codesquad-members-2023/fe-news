import { getElement } from '../../script/utils.js'
import MainView from './mainView.js'
class MainHandler {
  #allData
  #mainView
  #currentViewType
  #currentTypeData
  #currentViewData
  #currentPage
  #subscriptionList

  constructor(url) {
    this.#fetchData(url)
    this.#currentViewType = 'grid'
    this.#currentPage = 1
    this.#subscriptionList = new Set()
  }

  async #fetchData(url) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      this.#allData = this.#shuffleData(data)
      this.#initMainView()
    } catch (error) {
      throw new Error(`Error occurred while fetching data: ${error}`)
    }
  }

  #shuffleData(data) {
    return data.sort(() => Math.random() - 0.5)
  }

  #initMainView() {
    this.#currentTypeData = this.#allData
    this.#currentViewData = this.#getViewData(this.#currentTypeData)

    this.#mainView = new MainView(this.#currentViewData)

    this.#onClickDirectionBtn()
    this.#onMainViewEvent()
    this.onViewTypeEvent()
  }

  #onClickDirectionBtn() {
    const button = getElement('ns-direction-btn')

    button.addEventListener('click', ({ target }) => {
      const clickedBtn = target.alt

      if (clickedBtn === 'RightButton') {
        this.#currentPage++
      }

      if (clickedBtn === 'LeftButton') {
        this.#currentPage--
      }

      this.#renderView(this.#currentViewType)
    })
  }

  #getViewData(data) {
    if (this.#currentViewType === 'grid') {
      const PRESSES_PER_PAGE = 24

      const endPress = PRESSES_PER_PAGE * this.#currentPage
      const startPress = endPress - PRESSES_PER_PAGE

      const slicedData = data.slice(startPress, endPress)

      const gridViewData = slicedData.map(press => {
        const isSubscription = [...this.#subscriptionList].includes(press.name)
        press.isSubscription = isSubscription

        return press
      })

      return gridViewData
    }

    if (this.#currentViewType === 'list') {
      const listViewData = data[this.#currentPage]

      return listViewData
    }
  }

  #renderView() {
    this.#currentViewData = this.#getViewData(this.#currentTypeData)

    this.#mainView.setCurrentViewData({
      dataLength: this.#currentTypeData.length,
      currentPage: this.#currentPage,
      currentViewData: this.#currentViewData,
      currentViewType: this.#currentViewType
    })
  }

  #onMainViewEvent() {
    const mainView = getElement('.main-view')

    mainView.addEventListener('mouseover', ({ target }) => {
      this.subscriptionButtonHandler(target, 'none')
    })

    mainView.addEventListener('mouseout', ({ target }) => {
      this.subscriptionButtonHandler(target, 'none')
    })

    mainView.addEventListener('click', ({ target }) => {
      const cell = target.closest('.grid-cell')
      const type = target.closest('.view-type')
      const viewType = type?.dataset?.type

      if (cell) {
        this.subscriptionListHandler(cell)
      }

      if (viewType) {
        this.onViewTypeEvent(viewType)
      }
    })
  }

  subscriptionButtonHandler(target, className) {
    const cell = target.closest('.grid-cell')
    if (cell) {
      cell.firstChild.classList.toggle(className)
      cell.lastChild.classList.toggle(className)
    }
  }

  subscriptionListHandler(cell) {
    const pressName = cell.querySelector('.press img').alt
    const subscriptionStatus = cell.querySelector('.subscribe-btn img').alt

    subscriptionStatus === 'subscription'
      ? this.#subscriptionList.delete(pressName)
      : this.#subscriptionList.add(pressName)

    this.#renderView(this.#currentViewType)
  }

  getSubscriptionData(data) {
    const subscriptionData = data
      .filter(press => [...this.#subscriptionList].includes(press.name))
      .map(press => {
        press.isSubscription = true
        return press
      })

    return subscriptionData
  }

  onViewTypeEvent(viewType) {
    // set data
    if (viewType === 'all') {
      this.#currentTypeData = this.#allData
    }

    if (viewType === 'my') {
      this.#currentTypeData = this.getSubscriptionData(this.#allData)
    }

    // set view type
    if (viewType === 'grid') {
      this.#currentViewType = 'grid'
    }

    if (viewType === 'list') {
      this.#currentViewType = 'list'
    }

    // reset page
    if (this.#currentViewType === 'grid') {
      this.#currentPage = 1
    }

    if (this.#currentViewType === 'list') {
      this.#currentPage = 0
    }

    // this.#currentPage = 1
    this.#renderView(this.#currentViewType)
  }
}

export default MainHandler

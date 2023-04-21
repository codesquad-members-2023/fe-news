/* eslint-disable indent */
import { BUTTONS, CATEGORIES } from '../../script/contents.js'
class PressListView {
  #mainListView
  #pressesData

  constructor(data) {
    this.#pressesData = data
    this.#createPressListView()
  }

  #createPressListView() {
    const pressListView = `
      <div class="main__list-view">
        <div class="progress-bar">
          ${this.#pressesData ? this.#createProgressBar() : ''}
        </div>
        <div class="press__news">
          <div class="press__info press__title">
            ${
              this.#pressesData ? this.#createPressTitle(this.#pressesData) : ''
            }
          </div>
          <div class="news">
            <div class="news__main">
              ${
                this.#pressesData ? this.#createMainNews(this.#pressesData) : ''
              }
            </div>
            <div class="news__sub">
              ${this.#pressesData ? this.#createSubNews(this.#pressesData) : ''}
            </div>
          </div>
        </div>
      </div>
    `

    this.#mainListView = pressListView
  }

  #createProgressBar() {
    // TODO: 내가구독한언론사를 클릭하면 내가구독한언론사로 내용이 바뀐다.
    const categories = Object.values(CATEGORIES)

    const categoryHTML = categories
      .map(category => `<div class="category body-sm">${category}</div>`)
      .join('')

    return categoryHTML
  }

  #createPressTitle(data) {
    const subscriptionImage = data.isSubscription
      ? BUTTONS.UNSUBSCRIPTION
      : BUTTONS.SUBSCRIPTION
    const subscriptionText = data.isSubscription
      ? 'subscription'
      : 'cancellation'

    return `
      <div class="press">
        <img src="${data.logo_src}" alt="${data.name}" />
      </div>
      <span class="body-xs">${data.edit_time}</span>
      <div class="subscribe-btn">
        <img src=${subscriptionImage} alt="${subscriptionText}" />
      </div>
    `
  }

  #createMainNews(data) {
    return `
      <img src="${data.main_news_image}" alt="main_news_image" />
      <span class="body-md">${data.main_news_title}</span>
    `
  }

  #createSubNews(data) {
    const subNewsTitles = data.sub_news_titles
      .map(title => `<span class="body-md">${title}</span>`)
      .join('')

    const comment = `
      <span class="body-sd">
        ${data.name} 언론사에서 직접 편집한 뉴스입니다.
      </span>
    `

    return `
      ${subNewsTitles}
      ${comment}
    `
  }

  getListView() {
    return this.#mainListView
  }
}

export default PressListView

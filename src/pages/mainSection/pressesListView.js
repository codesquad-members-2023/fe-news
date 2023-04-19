class PressListView extends HTMLElement {
  pressesData

  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="main__list-view">
        <div class="progress-bar">
          ${this.#createProgressBar()}
        </div>
        <div class="press__news">
          <div class="press__title">
            ${this.#createPressTitle(this.pressesData)}
          </div>
          <div class="news">
            <div class="news__main">
              ${this.#createMainNews(this.pressesData)}
            </div>
            <div class="news__sub">
              ${this.#createSubNews(this.pressesData)}
            </div>
          </div>
        </div>
      </div>
    `
  }

  #createProgressBar() {
    const categories = [
      '종합/경제',
      '방송/통신',
      'IT',
      '영자지',
      '스포츠/연애',
      '매거진/전문지',
      '지역'
    ]

    const categoryHTML = categories
      .map(category => `<div class="category body-sm">${category}</div>`)
      .join('')

    return categoryHTML
  }

  #createPressTitle(data) {
    const subscriptionImage = data.isSubscription
      ? './asset/unsubscribeButton.svg'
      : './asset/SubscribeButton.svg'
    const subscriptionText = data.isSubscription
      ? 'subscription'
      : 'cancellation'

    return `
      <img src="${data.logo_src}" alt="logo_src" />
      <span class="body-xs">${data.edit_time}</span>
      <img class="subscribe-btn" src=${subscriptionImage} alt="${subscriptionText}" />
    `
  }

  #createMainNews(data) {
    return `
      <img src="${data.main_news_image}" alt="main_news_image" />
      <span class="body-md">${data.main_news_title}</span>
    `
  }

  #createSubNews(data) {
    const subNewsTitles = data[0].sub_news_titles
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
}

customElements.define('ns-main-list', PressListView)

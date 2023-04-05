class HeaderHandler {
  #headerData

  constructor() {
    this.#setData()
  }

  #setData() {
    this.#headerData = {
      icon: '../../asset/logo.svg',
      title: '뉴스스탠드',
      date: this.#getFormattedDate()
    }
  }

  getData() {
    return this.#headerData
  }

  #getFormattedDate() {
    const today = new Date()
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
    const formattedDate = today.toLocaleDateString('ko-KR', options)

    return formattedDate
  }
}

export default HeaderHandler

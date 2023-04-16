class UnsubscribeModal extends HTMLElement {
  pressData

  constructor() {
    super()
  }

  connectedCallback() {
    this.#render()
  }

  #render() {
    this.innerHTML = this.#template()
  }

  #template() {
    return `
      <section class="modal-main">
        <div class="title title-md">${this.#getPressTitle()}을(를) </div>
        <div class="title body-md">구독해지하시겠습니까?</div>
      </section>
      <section class="modal-action">
        <button class="cancel-btn body-md">예, 해지합니다</button>
        <button class="confirm-btn body-md">아니오</button>
      </section>
    `
  }

  #getPressTitle() {
    // return this.pressData.name
    return '서울경제'
  }
}

customElements.define('ns-unsubscribe-modal', UnsubscribeModal)

class MainDirectionBtn extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
      <button class="left-btn"><</button>
      <button class="right-btn">></button>
    `
  }
}

customElements.define('ns-direction-btn', MainDirectionBtn)
// current page를 알아야 한다.
// 첫 페이지에서는 좌측 화살표 hidden
// 마지막 페이지에서는 우측 화살표 hidden

class AutoRolling {
  constructor(data) {
    this.leftData = data.leftRollingData;
    this.rightData = data.rightRollingData;
  }

  template() {
    return `
    <div class="auto-rolling">
      <div class="rolling__container">
        <div class="media">연합뉴스</div>
        <div class="issue">${this.leftData}</div>
      </div>
      <div class="rolling__container">
      <div class="media">연합뉴스</div>
      <div class="issue">${this.rightData}</div>
    </div>
    </div>
    `;
  }

  viewRender() {
    const newElement = document.createElement('div');
    newElement.innerHTML = this.template();
    return newElement;
  }
}

export { AutoRolling };

// todo issue 데이터 할당
// viewRender항목 utils로 분리해서 재활용가능하게 쓸수있는지 고민해보기

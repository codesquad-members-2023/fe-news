export class AutoRolling {
  constructor() {}
  viewRender() {
    const newElement = document.createElement('div');
    const template = `
    <div class="auto-rolling">
      <div class="rolling__container">
        <div class="media">연합뉴스</div>
        <div class="issue">[1보] 김기현,안철수,황교안</div>
      </div>
      <div class="rolling__container">
      <div class="media">연합뉴스</div>
      <div class="issue">[1보] 김기현,안철수,황교안</div>
    </div>
    </div>
    `;
    newElement.innerHTML = template;
    return newElement;
  }
}

// todo issue 데이터 할당
// viewRender항목 utils로 분리해서 재활용가능하게 쓸수있는지 고민해보기

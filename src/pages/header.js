export class Header {
  constructor() {}

  viewRender() {
    const newElement = document.createElement('div');
    // todo 날짜 데이터 받는 함수 만들어서 집어넣기
    const template = `
    <div class="news__header">
      <div class="title">
        <img src="../src/assets/images/newsstand_logo.svg"/>
        <span>뉴스스탠드</span>
      </div>
      <div class="date">2023.02.10.금요일</div>
    </div>
    `;
    newElement.innerHTML = template;

    return newElement;
  }
}

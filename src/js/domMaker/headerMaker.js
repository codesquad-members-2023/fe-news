export default class HeaderMaker {
  constructor() {
    this.template;
    this.date;
  }

  getHeaderTemplate() {
    this.getDate();
    this.createHeader();
    return this.template;
  }

  createHeader() {
    this.template = `<div class="newsstand_header">
    <span class="newsstand_header_title">
      <img class="header_title_logo" src="/src/asset/headerIcon.svg" alt="newspaper" />
      <span class="header_title_text">뉴스스탠드</span>
    </span>
    <span class="newsstand_header_date">${this.date}</span>
  </div>`;
  }

  getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = days[today.getDay()];

    this.date = `${year}.${month}.${date} ${dayOfWeek}요일`;
  }
}

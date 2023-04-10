export default class HeaderMaker {
  constructor({ headerElement }) {
    this.headerElement = headerElement;
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
      <a onClick="window.location.reload()">
      <img class="header_title_logo" src="${this.headerElement.logoImgSrc}" alt="${this.headerElement.imgAlt}" />
      <span class="header_title_text">${this.headerElement.title}</span></a>
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

export default class NSHeaderView {
  constructor({ NS_HEADER_INFO }, REFERENCE) {
    this._parentElem = REFERENCE.NS_CONTAINER;
    this._info = NS_HEADER_INFO;
    this.render();
  }

  getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = days[today.getDay()];

    return `${year}.${month}.${date} ${dayOfWeek}요일`;
  }

  render() {
    const date = this.getDate();
    const markUp = this.generateMarkup(date);
    this._parentElem.insertAdjacentHTML('afterbegin', markUp);
  }

  generateMarkup(date) {
    return `<div class="newsstand_header">
    <span class="newsstand_header_title">
      <a onClick="window.location.reload()">
      <img class="header_title_logo" src="${this._info.LOGO_IMG_SRC}" alt="${this._info.imgAlt}" />
      <span class="header_title_text">${this._info.TITLE}</span></a>
    </span>
    <span class="newsstand_header_date">${date}</span>
  </div>`;
  }
}

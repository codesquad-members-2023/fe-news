export default class HeaderDate {
  constructor() {
    this.logo = document.querySelector(".root");
  }
  init() {
    this.insertHeaderDate();
  }
  insertDate() {
    const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    let today = new Date();
    let year = today.getFullYear();
    let month = (today.getMonth() + 1).length == 1 ? "0" + today.getMonth() + 1 : today.getMonth() + 1;
    let date = today.getDate().length == 1 ? "0" + today.getDate() : today.getDate();
    let day = days[today.getDay()];
    return `<span class="date_text">${year}. ${month}. ${date}. ${day}</span>`;
  }

  insertHeaderDate() {
    return `<div class="header__date">${this.insertDate()}</div>`;
  }
}

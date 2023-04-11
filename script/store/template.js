const insertDate = () => {
  const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  let today = new Date();
  let year = today.getFullYear();
  let month = (today.getMonth() + 1).length == 1 ? "0" + today.getMonth() + 1 : today.getMonth() + 1;
  let date = today.getDate().length == 1 ? "0" + today.getDate() : today.getDate();
  let day = days[today.getDay()];
  return `<span class="date_text">${year}. ${month}. ${date}. ${day}</span>`;
};
const newsHeaderTemplate = () =>
  `<div class="news__header">
  <div class="heder__logo">
  <a onClick="window.location.reload()" style="cursor: pointer;">
  <img class = "logo_img" src="assets/newsPaper.svg"></a>
  <span class= "logo_text">뉴스스탠드</span>
  </div>
  <div class="header__date">${insertDate()}</div>
  </div>`;

const rollingBarTemplate = () =>
  `<div class= "news__rolling-bar">
  <div class= "rolling-bar_left">
  <img src="assets/rollingLogo.svg" /><ul class="data_list_left"></ul></div>
  <div class= "rolling-bar_right">
  <img src="assets/rollingLogo.svg" /><ul class="data_list_right"></ul></div>
  </div>`;

export { newsHeaderTemplate, rollingBarTemplate };

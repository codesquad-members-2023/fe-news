export default class HeaderLogo {
  insertLogo() {
    return `<img class = "logo_img" src="assets/newsPaper.svg">`;
  }
  insertLogoText() {
    return `<span class= "logo_text">뉴스스탠드</span>`;
  }
  insertHedaerLogo() {
    return `<div class="heder__logo">${this.insertLogo()}${this.insertLogoText()}</div>`;
  }
}

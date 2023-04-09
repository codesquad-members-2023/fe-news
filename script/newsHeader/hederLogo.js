export default class HeaderLogo {
  insertLogo() {
    return `<a onClick="window.location.reload()" style="cursor: pointer;"><img class = "logo_img" src="assets/newsPaper.svg"></a>`;
  }
  insertLogoText() {
    return `<span class= "logo_text">뉴스스탠드</span>`;
  }
  insertHedaerLogo() {
    return `<div class="heder__logo">${this.insertLogo()}${this.insertLogoText()}</div>`;
  }
}

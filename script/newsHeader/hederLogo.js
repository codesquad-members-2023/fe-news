export default class HeaderLogo {
  constructor(){
    this.logo=document.querySelector(".root");
  }
  init(){
    this.insertHedaerLogo();
  }
  insertLogo(){
    return `<img class = "logo_img" src="assets/newsPaper.svg">`
  }
  insertLogoText(){
    return `<span class= "logo_text">뉴스스탠드</span>`
  }
  insertHedaerLogo(){
    return this.logo.innerHTML=`<div class="heder__logo">${this.insertLogo()}${this.insertLogoText()}</div>`
  }
}
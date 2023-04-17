import { $ } from "../utils/dom.js";
import { COMPANY } from "../constants/dom.js";

export const renderNewsCompanyBar = () => {
  const newsCompanyTemplate = `
<div class="news-company">
<div class="news-company__bar">
  <div class="company__choice">
    <span class="company__choice_all">전체 언론사</span>
    <span class="company__choice_subscribe">내가 구독한 언론사</span>
  </div>
  <div class = "company__view">
    <img class= "company__view_detail" src="assets/viewDetail.svg"/>
    <img class=" company__view_logo" src="assets/viewLogo.svg"/>
  </div>
  </div>
  <div class="news-company__grid">
    <div class="grid_btn-left"><img src="assets/leftButton.svg"/></div>
    <div class="grid_set"></div>
    <div class="grid_btn-right"><img src="assets/rightButton.svg"/></div>
  </div>
</div>
`;
  const root = $(".root");
  const newsCompanyBar = document.createElement("section");
  root.appendChild(newsCompanyBar);
  newsCompanyBar.innerHTML = newsCompanyTemplate;
};

export class insertNewsCompanyGrid {
  constructor(newsData) {
    this.gridBox = $(".grid_set");
    this.rightButton = $(".grid_btn-right");
    this.leftButton = $(".grid_btn-left");
    this.page = COMPANY.FIRST_PAGE;
    this.newsData = newsData;
  }

  init() {
    this.insertNewsData();
    this.controlButton();
    this.onEvents();
  }

  insertNewsData() {
    this.gridBox.innerHTML = "";
    this.newsData[this.page].map((data) => {
      this.gridBox.innerHTML += `<div class="grid_list" id="${data.mediaId}">
      <img src=${data.mediaInfo.imgSrc} alt=${data.mediaInfo.name}/>
      <div class ="grid_btn">
      <button type="button">+구독 하기</button>
      </div>
      </div>
      `;
    });
  }

  controlButton() {
    if (this.page > COMPANY.FIRST_PAGE) {
      this.leftButton.classList.remove("hidden");
    } else {
      this.leftButton.classList.add("hidden");
    }
    if (this.page < COMPANY.LAST_PAGE) {
      this.rightButton.classList.remove("hidden");
    } else {
      this.rightButton.classList.add("hidden");
    }
  }

  onEvents() {
    this.rightButton.addEventListener("click", () => {
      this.page += COMPANY.PAGES;
      controlButton();
      insertNewsData();
    });
    this.leftButton.addEventListener("click", () => {
      this.page -= COMPANY.PAGES;
      controlButton();
      insertNewsData();
    });
  }
}

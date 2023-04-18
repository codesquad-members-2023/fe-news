import { $ } from "../utils/dom.js";
import { COMPANY, SUBSCRIBE } from "../constants/dom.js";
import { SubscribeController } from "../controller/subscribeController.js";

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
    this.insertNewsData(SUBSCRIBE.REGISTER);
    this.controlButton();
    this.onEvents();
  }

  insertNewsData(subscribe) {
    this.gridBox.innerHTML = "";
    this.newsData[this.page].map((data) => {
      this.gridBox.innerHTML += `<div class="grid_list" id="${data.mediaId}">
      <img src=${data.mediaInfo.imgSrc} alt=${data.mediaInfo.name}/>
      <div class ="grid_btn">
      <button type="button">${subscribe}</button>
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
      insertNewsData(SUBSCRIBE.REGISTER);
    });
    this.leftButton.addEventListener("click", () => {
      this.page -= COMPANY.PAGES;
      controlButton();
      insertNewsData(SUBSCRIBE.REGISTER);
    });
    register(this.newsData, this.page);
  }
}

export const register = (newsData, page) => {
  const gridBtn = document.querySelector(".grid_set");
  const subData = new SubscribeController();
  const rightButton = $(".grid_btn-right");
  const myNewsCompany = $(".company__choice_subscribe");
  const allNewsCompany = $(".company__choice_all");
  gridBtn.addEventListener("click", (e) => {
    let btn = e.target.closest("button");
    if (btn.textContent === SUBSCRIBE.REGISTER) {
      btn.textContent = SUBSCRIBE.CANCEL;
      subData.appendSubscribeData(e.target.closest(".grid_list").id, newsData, page);
    } else {
      btn.textContent = SUBSCRIBE.REGISTER;
      subData.appendUnsubscribeData(e.target.closest(".grid_list").id, newsData, page);
    }
  });
  myNewsCompany.addEventListener("click", () => {
    insertMyNewsData(SUBSCRIBE.CANCEL, subData.showPublishData());
    rightButton.classList.add("hidden");
    allNewsCompany.classList.add("change_gray");
    myNewsCompany.classList.add("change_black");
  });
  allNewsCompany.addEventListener("click", () => {
    insertNewsData(SUBSCRIBE.REGISTER);
  });
};

export const insertMyNewsData = (subscribe, newsData) => {
  const gridBox = $(".grid_set");
  gridBox.innerHTML = "";
  if (!newsData) return;
  newsData.map((data) => {
    gridBox.innerHTML += `<div class="grid_list" id="${data.mediaId}">
    <img src=${data.mediaInfo.imgSrc} alt=${data.mediaInfo.name}/>
    <div class ="grid_btn">
    <button type="button">${subscribe}</button>
    </div>
    </div>
    `;
  });
  if (newsData.length !== COMPANY.PAGES_PER) {
    for (let i = 0; i < COMPANY.PAGES_PER - newsData.length; i++) {
      gridBox.innerHTML += `<div class="grid_list"></div>`;
    }
  }
};

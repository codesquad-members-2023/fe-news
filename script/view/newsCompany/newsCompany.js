import { $ } from "../../utils/dom.js";
import { COMPANY, SUBSCRIBE } from "../../constants/dom.js";
import { SubscribeController } from "../../controller/subscribeController.js";
import { updateNewsLogo } from "./newsCompanySubscribe.js";
import { changeNewsDetailColor, changeNewsDetailDisplay } from "./newsCompanyDetail.js";
//처음 뉴스 그리드 부분과 그리드 부분 바의 토대를 만든다.
export const renderNewsCompanyBar = (selector, element) => {
  const newsCompanyTemplate = `
  <div class="news-company">
  <div class="news-company__bar">
    <div class="company__choice">
      <span class="company__choice_all">전체 언론사</span>
      <span class="company__choice_subscribe">내가 구독한 언론사</span>
    </div>
    <div class="company__view">
      <object id="company__view_detail" type="image/svg+xml" data="assets/viewDetail.svg">
        <img />
      </object>
      <object id="company__view_logo" type="image/svg+xml" data="assets/viewLogo.svg">
        <img />
      </object>
    </div>
  </div>
  <div class="news-company__grid">
    <div class="grid_btn-left"><img src="assets/leftButton.svg" /></div>
    <div class="grid_set">
      <div class="grid_all">
        <div class="all_first-page" index="0"></div>
        <div class="all_second-page none"></div>
        <div class="all_third-page none"></div>
        <div class="all_fourth-page none"></div>
      </div>
      <div class="grid_subscribe"></div>
    </div>
    <div class="grid_btn-right"><img src="assets/rightButton.svg" /></div>
  </div>
  <div class="news-company__detail none">
    <div class="detail_btn-left"><img src="assets/leftButton.svg" /></div>
    <div class="news_detail_container"><div class="news_category-bar"></div></div>
    <div class="detail_btn-right"><img src="assets/rightButton.svg" /></div>
  </div>
</div>
`;
  const root = $(selector);
  const newsCompanyBar = document.createElement(element);
  root.appendChild(newsCompanyBar);
  newsCompanyBar.innerHTML = newsCompanyTemplate;
};

export const insertMediaLogosGrid = (mediaDataSet) => {
  const gridFirstPage = $(".all_first-page");
  const gridSecondPage = $(".all_second-page");
  const gridThirdPage = $(".all_third-page");
  const gridFourthPage = $(".all_fourth-page");
  const rightButton = $(".grid_btn-right");
  const leftButton = $(".grid_btn-left");
  const mediaData = mediaDataSet;

  const insertMediaLogosGrid = (subscribe, gridBox, mediaLogoData, page) => {
    gridBox.innerHTML = mediaLogoData.reduce((acc, data) => {
      return (acc += `<div class="grid_list" id="${data.mediaId}" index="${page}">
      <img src=${data.mediaInfo.imgSrc} alt=${data.mediaInfo.name}/>
      <div class ="grid_btn">
      <button type="button">${subscribe}</button>
      </div>
      </div>
      `);
    }, "");
  };

  const insertPagesData = () => {
    insertMediaLogosGrid(SUBSCRIBE.REGISTER, gridFirstPage, mediaData[COMPANY.FIRST_PAGE], COMPANY.FIRST_PAGE);
    insertMediaLogosGrid(SUBSCRIBE.REGISTER, gridSecondPage, mediaData[COMPANY.SECOND_PAGE], COMPANY.SECOND_PAGE);
    insertMediaLogosGrid(SUBSCRIBE.REGISTER, gridThirdPage, mediaData[COMPANY.THIRD_PAGE], COMPANY.THIRD_PAGE);
    insertMediaLogosGrid(SUBSCRIBE.REGISTER, gridFourthPage, mediaData[COMPANY.LAST_PAGE], COMPANY.LAST_PAGE);
  };
  insertPagesData();

  const toggle = (hiddenBtn, page) => {
    if (page > COMPANY.FIRST_PAGE) {
      leftButton.classList.remove(hiddenBtn);
    } else {
      leftButton.classList.add(hiddenBtn);
    }
    if (page < COMPANY.LAST_PAGE) {
      rightButton.classList.remove(hiddenBtn);
    } else {
      rightButton.classList.add(hiddenBtn);
    }
  };
  toggle("hidden", COMPANY.FIRST_PAGE);

  const togglePage = (page, isDisplayNone) => {
    switch (page) {
      case COMPANY.FIRST_PAGE: {
        gridFirstPage.classList.remove(isDisplayNone);
        gridSecondPage.classList.add(isDisplayNone);
        gridThirdPage.classList.add(isDisplayNone);
        gridFourthPage.classList.add(isDisplayNone);
        break;
      }
      case COMPANY.SECOND_PAGE: {
        gridFirstPage.classList.add(isDisplayNone);
        gridSecondPage.classList.remove(isDisplayNone);
        gridThirdPage.classList.add(isDisplayNone);
        gridFourthPage.classList.add(isDisplayNone);
        break;
      }
      case COMPANY.THIRD_PAGE: {
        gridFirstPage.classList.add(isDisplayNone);
        gridSecondPage.classList.add(isDisplayNone);
        gridThirdPage.classList.remove(isDisplayNone);
        gridFourthPage.classList.add(isDisplayNone);
        break;
      }
      case COMPANY.LAST_PAGE: {
        gridFirstPage.classList.add(isDisplayNone);
        gridSecondPage.classList.add(isDisplayNone);
        gridThirdPage.classList.add(isDisplayNone);
        gridFourthPage.classList.remove(isDisplayNone);
        break;
      }
      default: {
        break;
      }
    }
  };
  const onEvents = (page) => {
    let currentPage = page;
    rightButton.addEventListener("click", () => {
      currentPage += COMPANY.SECOND_PAGE;
      togglePage(currentPage, "none");
      toggle("hidden", currentPage);
    });
    leftButton.addEventListener("click", () => {
      currentPage -= COMPANY.SECOND_PAGE;
      togglePage(currentPage, "none");
      toggle("hidden", currentPage);
    });
    register(mediaData);
    changeNewsDetailColor();
    changeNewsDetailDisplay();
  };
  onEvents(COMPANY.FIRST_PAGE);
};

export const register = (newsData) => {
  const subscribeData = new SubscribeController();
  const subscribeButtonClicked = (newsData, selector) => {
    const gridBtn = $(selector);
    gridBtn.addEventListener("click", ({target}) => {
      let btn = target.closest("button");
      let id = target.closest(".grid_list").id;
      let page = target.closest(".grid_list").getAttribute("index");

      if (btn.textContent === SUBSCRIBE.REGISTER) {
        btn.textContent = SUBSCRIBE.CANCEL;
        subscribeData.appendSubscribeData(id, newsData[page]);
      } else {
        btn.textContent = SUBSCRIBE.REGISTER;
        subscribeData.appendUnsubscribeData(id, newsData[page]);
      }
    });
  };
  subscribeButtonClicked(newsData, ".grid_all");
  updateNewsLogo(".company__choice_all", ".company__choice_subscribe", subscribeData);
};

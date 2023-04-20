import { $ } from "../../utils/dom.js";
import { COMPANY, SUBSCRIBE } from "../../constants/dom.js";
import { SubscribeController } from "../../controller/subscribeController.js";
import { updateNewsLogo } from "./newsCompanySubscribe.js";
import { changeNewsDetailColor, changeNewsDetailDisplay } from "./newsCompanyDetail.js";

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
    const { FIRST_PAGE, SECOND_PAGE, THIRD_PAGE, LAST_PAGE } = COMPANY;
    const { REGISTER } = SUBSCRIBE;
    insertMediaLogosGrid(REGISTER, gridFirstPage, mediaData[FIRST_PAGE], FIRST_PAGE);
    insertMediaLogosGrid(REGISTER, gridSecondPage, mediaData[SECOND_PAGE], SECOND_PAGE);
    insertMediaLogosGrid(REGISTER, gridThirdPage, mediaData[THIRD_PAGE], THIRD_PAGE);
    insertMediaLogosGrid(REGISTER, gridFourthPage, mediaData[LAST_PAGE], LAST_PAGE);
  };
  insertPagesData();

  const toggle = (hiddenBtn, page) => {
    const { FIRST_PAGE, LAST_PAGE } = COMPANY;
    if (page > FIRST_PAGE) {
      leftButton.classList.remove(hiddenBtn);
    } else {
      leftButton.classList.add(hiddenBtn);
    }
    if (page < LAST_PAGE) {
      rightButton.classList.remove(hiddenBtn);
    } else {
      rightButton.classList.add(hiddenBtn);
    }
  };
  toggle("hidden", COMPANY.FIRST_PAGE);

  const togglePage = (page, isDisplayNone) => {
    const { FIRST_PAGE, SECOND_PAGE, THIRD_PAGE, LAST_PAGE } = COMPANY;
    switch (page) {
      case FIRST_PAGE: {
        gridFirstPage.classList.remove(isDisplayNone);
        gridSecondPage.classList.add(isDisplayNone);
        gridThirdPage.classList.add(isDisplayNone);
        gridFourthPage.classList.add(isDisplayNone);
        break;
      }
      case SECOND_PAGE: {
        gridFirstPage.classList.add(isDisplayNone);
        gridSecondPage.classList.remove(isDisplayNone);
        gridThirdPage.classList.add(isDisplayNone);
        gridFourthPage.classList.add(isDisplayNone);
        break;
      }
      case THIRD_PAGE: {
        gridFirstPage.classList.add(isDisplayNone);
        gridSecondPage.classList.add(isDisplayNone);
        gridThirdPage.classList.remove(isDisplayNone);
        gridFourthPage.classList.add(isDisplayNone);
        break;
      }
      case LAST_PAGE: {
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
  const { REGISTER, CANCEL } = SUBSCRIBE;
  const subscribeData = new SubscribeController();
  const subscribeButtonClicked = (newsData, selector) => {
    const gridBtn = $(selector);
    gridBtn.addEventListener("click", ({ target }) => {
      let btn = target.closest("button");
      let id = target.closest(".grid_list").id;
      let page = target.closest(".grid_list").getAttribute("index");

      if (btn.textContent === REGISTER) {
        btn.textContent = CANCEL;
        subscribeData.appendSubscribeData(id, newsData[page]);
      } else {
        btn.textContent = REGISTER;
        subscribeData.appendUnsubscribeData(id, newsData[page]);
      }
    });
  };
  subscribeButtonClicked(newsData, ".grid_all");
  updateNewsLogo(".company__choice_all", ".company__choice_subscribe", subscribeData);
};

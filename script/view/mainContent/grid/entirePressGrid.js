import { $, $$ } from "../../../utils/dom.js";
import { COMPANY, SUBSCRIBE } from "../../../constants/dom.js";
import { SubscribeController } from "../../../controller/subscribeController.js";
import { updateNewsLogo } from "./myPressGrid.js";
import { changeNewsDetailColor } from "../detail/entirePressDetail.js";

const insertMediaData = ({ subscribe, gridBox, mediaLogoData, pages }) => {
  gridBox.innerHTML = mediaLogoData.reduce((acc, data) => {
    return (acc += `<div class="grid_list" id="${data.mediaId}" index="${pages}">
    <img src=${data.mediaInfo.imgSrc} alt=${data.mediaInfo.name}/>
    <div class ="grid_btn">
    <button type="button">${subscribe}</button>
    </div>
    </div>
    `);
  }, "");
};

const insertPagesData = (mediaData) => {
  const { REGISTER } = SUBSCRIBE;
  const pageList = $$(".grid_all > div");
  pageList.forEach((pageDom, page) => {
    insertMediaData({ subscribe: REGISTER, gridBox: pageDom, mediaLogoData: mediaData[page], pages: page });
  });
};

const hidePageToggleBtn = (hiddenBtn, page) => {
  const rightButton = $(".grid_btn-right");
  const leftButton = $(".grid_btn-left");
  const { FIRST_PAGE, LAST_PAGE } = COMPANY;
  if (page > FIRST_PAGE) leftButton.classList.remove(hiddenBtn);
  else leftButton.classList.add(hiddenBtn);
  if (page < LAST_PAGE) rightButton.classList.remove(hiddenBtn);
  else rightButton.classList.add(hiddenBtn);
};

const showPage = ({ page, isDisplayNone, pageList }) => {
  pageList.forEach((pageDom, idx) => {
    if (page === idx) pageDom.classList.remove(isDisplayNone);
    else pageDom.classList.add(isDisplayNone);
  });
};

const controlGridPage = (currentPage) => {
  const pageList = $$(".grid_all > div");
  showPage({ page: currentPage, isDisplayNone: "none", pageList: pageList });
  hidePageToggleBtn("hidden", currentPage);
};

const onGridBtnEvents = ({ rightBtn, leftBtn }) => {
  let currentPage = COMPANY.FIRST_PAGE;
  rightBtn.addEventListener("click", () => {
    currentPage += COMPANY.SECOND_PAGE;
    controlGridPage(currentPage);
  });
  leftBtn.addEventListener("click", () => {
    currentPage -= COMPANY.SECOND_PAGE;
    controlGridPage(currentPage);
  });
};

export const register = { subscribeData: new SubscribeController() };

const subscribeButtonClicked = (newsData, selector) => {
  const { REGISTER, CANCEL } = SUBSCRIBE;
  const gridBtn = $(selector);
  gridBtn.addEventListener("click", ({ target }) => {
    let btn = target.closest("button");
    let id = target.closest(".grid_list").id;
    let page = target.closest(".grid_list").getAttribute("index");

    if (btn.textContent === REGISTER) {
      btn.textContent = CANCEL;
      register.subscribeData.appendSubscribeData(id, newsData[page]);
    } else {
      btn.textContent = REGISTER;
      register.subscribeData.appendUnsubscribeData(id, newsData[page]);
    }
  });
};

const moveEntirePressDetail = (mediaDataSet) => {
  changeNewsDetailColor();
  subscribeButtonClicked(mediaDataSet, ".grid_all");
};

export const reciveGridData = (mediaDataSet) => {
  const rightButton = $(".grid_btn-right");
  const leftButton = $(".grid_btn-left");
  const { subscribeData } = register;
  insertPagesData(mediaDataSet);
  onGridBtnEvents({ rightBtn: rightButton, leftBtn: leftButton });
  updateNewsLogo({ allNewsSelector: ".company__choice_all", myNewsSelector: ".company__choice_subscribe", registerData: subscribeData });
  moveEntirePressDetail(mediaDataSet);
};

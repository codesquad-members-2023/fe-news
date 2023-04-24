import { $, renderMaker } from "../../../utils/dom.js";

//버튼 조작
export const changeNewsDetailColor = () => {
  const detailCircle = document.getElementById("company__view_detail").contentDocument.querySelector("path");
  const logoCircle = document.getElementById("company__view_logo").contentDocument.querySelector("path");
  detailCircle.addEventListener("click", () => {
    detailCircle.setAttribute("fill", "#4362d0");
    logoCircle.setAttribute("fill", "#d2dae0");
  });
  logoCircle.addEventListener("click", () => {
    detailCircle.setAttribute("fill", "#d2dae0");
    logoCircle.setAttribute("fill", "#4362d0");
  });
  changeNewsDetailDisplay();
};

const changeNewsDetailDisplay = () => {
  const detailCircle = document.getElementById("company__view_detail").contentDocument.querySelector("path");
  const logoCircle = document.getElementById("company__view_logo").contentDocument.querySelector("path");
  const allDisplay = $(".news-company__grid");
  const detailDisplay = $(".news-company__detail");
  detailCircle.addEventListener("click", () => {
    allDisplay.classList.add("none");
    detailDisplay.classList.remove("none");
  });
  logoCircle.addEventListener("click", () => {
    allDisplay.classList.remove("none");
    detailDisplay.classList.add("none");
  });
};

//돔 조작
export const reciveDetailData = (mediaDetailData) => {
  const { mediaInfo, mainContent, subContent } = mediaDetailData[0];
  insertMediaDetailData(mediaInfo);
  insertMediaMainData(mainContent);
};

export const insertMediaDetailData = (mediaInfo) => {
  const { imgSrc, modifiedTime } = mediaInfo;
  const template = `
  <img class="display_header_logo" src="${imgSrc}"></img>
  <div class="display_header_date">${modifiedTime}</div>
  <button class="display_header_btn">+구독하기</button>
`;
  renderMaker({ selector: ".economy_detail_display", element: "div", template: template, nameList: ["category-display_header"] });
};

const insertMediaMainData = (mainContent) => {
  const { mainImgSrc, mainTitle } = mainContent;
  const template = `
  <div class="display_main-news">
  <img src="${mainImgSrc}"/>
  <div class ="main-news_headline">${mainTitle}</div>
  </div>
  `;

  renderMaker({ selector: ".economy_detail_display", element: "div", template: template, nameList: ["category-display_news"] });
};

const insertHeadlineData = (subContent) => {
  const { subNewsList } = subContent;
  const template = subNewsList.reduce((acc, data) => acc + `<div class= "headline-news">${data}</div>`, "");
  renderMaker({ selector: ".category-display_news", element: "div", template: template, nameList: [" display_headline-news"] });
};

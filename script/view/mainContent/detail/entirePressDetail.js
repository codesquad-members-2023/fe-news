import { $ } from "../../../utils/dom.js";

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
export const insertMediaDetailData = (selector, MediaDetailData) => {
  const gridBox = $(selector);
  gridBox.innerHTML = `<div class="category-display_header">
  <img class="display_header_logo" src="${MediaDetailData[0].mediaInfo.imgSrc}"></img>
  <div class="display_header_date">${MediaDetailData[0].mediaInfo.modifiedTime}</div>
  <button class="display_header_btn">+구독하기</button>
</div>
`;
};

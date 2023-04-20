import { $ } from "../../utils/dom.js";

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
};

export const changeNewsDetailDisplay = () => {
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

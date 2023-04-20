import { $ } from "../../utils/dom.js";

export const changeNewsDetailColor = () => {
  const svgDetailObject = document.getElementById("company__view_detail");
  const svgLogoObject = document.getElementById("company__view_logo");
  const svgDetailDocument = svgDetailObject.contentDocument;
  const svgLogoDocument = svgLogoObject.contentDocument;
  const detailCircle = svgDetailDocument.querySelector("path");
  const logoCircle = svgLogoDocument.querySelector("path");
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
  const svgDetailObject = document.getElementById("company__view_detail");
  const svgLogoObject = document.getElementById("company__view_logo");
  const svgDetailDocument = svgDetailObject.contentDocument;
  const svgLogoDocument = svgLogoObject.contentDocument;
  const detailCircle = svgDetailDocument.querySelector("path");
  const logoCircle = svgLogoDocument.querySelector("path");
  const allDisplay = $(".news-company__grid");
  const detailDisplay = $(".news-company__detail");
  detailCircle.addEventListener("click", () => {
    allDisplay.classList.add("none");
    detailDisplay.classList.remove("none");
  });
  logoCircle.addEventListener("click", () => {
    allDisplay.classList.remove("none");
    detailDisplay.classList.add("none");
  })
}
;

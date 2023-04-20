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

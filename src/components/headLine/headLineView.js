import { getHeadLine } from "../../api/getData.js";

export const createNewsStandHeadLine = () => {
  const headLineHotURL = "http://localhost:3000/headLineHot";
  const headLineURL = "http://localhost:3000/headLine";

  const headLineEl = document.createElement("div");
  headLineEl.classList.add("news-stand-headLine");

  getHeadLine(headLineHotURL).then((hotHeadLine) => {
    headLineEl.innerHTML += hotHeadLine;
  });
  getHeadLine(headLineURL).then((headLine) => {
    headLineEl.innerHTML += headLine;
  });

  return headLineEl;
};

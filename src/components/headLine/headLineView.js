import { getHeadLine } from "../../api/getData.js";
import { HeadLine } from "./headLineClass.js";

export const createNewsStandHeadLine = () => {
  const headLineHotURL = "http://localhost:3000/headLineHot";
  const headLineNomalURL = "http://localhost:3000/headLine";

  const headLineEl = document.createElement("div");
  headLineEl.classList.add("news-stand-headLine");

  getHeadLine(headLineHotURL).then((jsonData) => {
    const hotHeadLine = new HeadLine(jsonData);
    const hotHeadLineEl = hotHeadLine.makeHeadline();
    headLineEl.innerHTML += hotHeadLineEl;
  });

  getHeadLine(headLineNomalURL).then((jsonData) => {
    const nomalHeadLine = new HeadLine(jsonData);
    const nomalHeadLineEl = nomalHeadLine.makeHeadline();
    headLineEl.innerHTML += nomalHeadLineEl;
  });

  return headLineEl;
};

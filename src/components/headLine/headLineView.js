import { dataRequestToAPI } from "../../api/fetchData.js";
import { HeadLine } from "./headLine.js";

export const createNewsStandHeadLine = () => {
  const headLineHotURL = "http://localhost:3000/headLineHot";
  const headLineNomalURL = "http://localhost:3000/headLine";

  const headLineEl = document.createElement("div");
  headLineEl.classList.add("news-stand-headLine");
  headLineEl.classList.add("news-stand-component_size");

  dataRequestToAPI(headLineHotURL).then((jsonData) => {
    const hotHeadLine = new HeadLine(jsonData);
    const hotHeadLineEl = hotHeadLine.getHeadlineHTML();
    headLineEl.innerHTML += hotHeadLineEl;
  });

  dataRequestToAPI(headLineNomalURL).then((jsonData) => {
    const nomalHeadLine = new HeadLine(jsonData);
    const nomalHeadLineEl = nomalHeadLine.getHeadlineHTML();
    headLineEl.innerHTML += nomalHeadLineEl;
  });

  return headLineEl;
};

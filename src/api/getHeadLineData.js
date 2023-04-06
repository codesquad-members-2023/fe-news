import { HeadLine } from "../components/headLine/headLineClass.js";

export const getHeadLine = (URL) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const headLineEl = new HeadLine(data);
      console.log(headLineEl.headLineList);
    })
    .catch((error) => console.log(`fetch 에러! ${error}`));
};

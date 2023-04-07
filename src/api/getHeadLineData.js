import { HeadLine } from "../components/headLine/headLineClass.js";

export const getHeadLine = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((jsonData) => {
      const headLine = new HeadLine(jsonData);
      return headLine.makeHeadline();
    })
    .catch((error) => console.error(`fetch 에러! ${error}`));
};

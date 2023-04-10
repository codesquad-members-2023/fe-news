import { HeadLine } from "../components/headLine/headLineClass.js";
import { Journal } from "../components/journalList/journalClass.js";

export const getHeadLine = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((jsonData) => {
      const headLine = new HeadLine(jsonData);
      return headLine.makeHeadline();
    })
    .catch((error) => console.error(`fetch 에러! ${error}`));
};

export const getJournal = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((jsonData) => {
      const journal = new Journal(jsonData);
      return journal.makeJournal();
    })
    .catch((error) => console.error(`fetch 에러! ${error}`));
};

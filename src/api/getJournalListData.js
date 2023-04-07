import { Journal } from "../components/journalList/journalClass.js";

export const getJournal = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((jsonData) => {
      const journal = new Journal(jsonData);
      //   return journal.makeJournal();
      return journal.journalList;
    })
    .catch((error) => console.error(`fetch 에러! ${error}`));
};

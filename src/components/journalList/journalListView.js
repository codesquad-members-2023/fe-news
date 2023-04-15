import { JournalHeader } from "./journalHeader.js";
import { Journal } from "./journal.js";
import { Carousel } from "./journalTrack.js";
import { getJournal } from "../../api/getData.js";

const createJournalList = () => {
  const journalListEl = document.createElement("article");
  journalListEl.classList.add("news-stand-jounalList");

  const journalHeader = new JournalHeader();
  journalListEl.appendChild(journalHeader.element);

  const journalCarousel = new Carousel();
  journalListEl.appendChild(journalCarousel.element);

  return journalListEl;
};

export default createJournalList;

// const renderJournal = async () => {
//   try {
//     const journalURL = "http://localhost:3000/journal";
//     const journalData = await getJournal(journalURL);
//     const journal = new Journal(journalData);
//     const journalItems = journal.getJournalItem();
//     return journalItems;
//   } catch (error) {
//     console.error(error);
//   }
// };

// renderJournal().then((journalItems) => {
//   const journalContainer = document.querySelector(".journal-container");
//   const shuffledItems = journalItems.sort(() => 0.5 - Math.random());
//   shuffledItems.forEach((item) => {
//     journalContainer.appendChild(item);
//   });
// });

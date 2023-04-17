import { JournalHeader } from "./journalHeader.js";
import { Journal } from "./journal.js";
import { Carousel } from "./journalTrack.js";
import { getJournal } from "../../api/getData.js";

const createJournalList = () => {
  const journalListEl = document.createElement("article");
  journalListEl.classList.add("news-stand-jounalList");

  const fetchJournalData = async () => {
    try {
      const journalURL = "http://localhost:3000/journal";
      const journalData = await getJournal(journalURL);
      const journal = new Journal(journalData);
      const journalItems = journal.getJournalItems();
      return journalItems;
    } catch (error) {
      console.error(error);
    }
  };

  const updateJournalData = (state) => {
    const journalContainer = document.querySelector(".journal-container");
    journalContainer.innerHTML = "";
    const journalList =
      state === "ALL"
        ? journalHeader.store.getJournalListAll()
        : journalHeader.store.getJournalSubscribe();
    journalList.forEach((item) => {
      journalContainer.appendChild(item);
    });
  };

  const journalHeader = new JournalHeader(updateJournalData);
  journalListEl.appendChild(journalHeader.element);

  const journalCarousel = new Carousel();
  journalListEl.appendChild(journalCarousel.element);

  fetchJournalData().then((journalItems) => {
    const journalContainer = document.querySelector(".journal-container");
    journalHeader.store.journalState = "ALL";
    journalHeader.store.setJournalListAll(journalItems);
    const jounalList = journalHeader.store.journalListAll;
    jounalList.forEach((item) => {
      journalContainer.appendChild(item);
    });
  });

  return journalListEl;
};

export default createJournalList;

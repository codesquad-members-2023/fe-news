import { JournalHeader } from "./journalHeader.js";
import { Journal } from "./journal.js";
import { Carousel } from "./journalTrack.js";
import { dataRequestToAPI } from "../../api/fetchData.js";
import { JournalHeaderStore } from "../../store/journalHeaderStore.js";

const createJournalList = () => {
  const journalListEl = document.createElement("article");
  journalListEl.classList.add("news-stand-jounalList");

  const updateJournalData = (state) => {
    const journalContainer = document.querySelector(".journal-container");
    journalContainer.innerHTML = "";
    const journalList =
      state === "STATE_ALL"
        ? journalHeader.journalHeaderStore.getJournalListAll()
        : journalHeader.journalHeaderStore.getJournalSubscribe();
    journalList.forEach((item) => {
      journalContainer.appendChild(item.element);
    });
  };

  const journalHeaderStore = new JournalHeaderStore(updateJournalData);
  const journalHeader = new JournalHeader(journalHeaderStore);
  journalListEl.appendChild(journalHeader.element);

  const journalCarousel = new Carousel();
  journalListEl.appendChild(journalCarousel.element);

  const fetchJournalData = async (journalURL) => {
    try {
      const journalDatas = await dataRequestToAPI(journalURL);
      const journals = journalDatas.map((journalData) => {
        return new Journal(journalData);
      });
      return journals;
    } catch (error) {
      console.error(error);
    }
  };

  const loadJournalItems = async () => {
    const journalURL = "http://localhost:3000/journal";
    const journalItems = await fetchJournalData(journalURL);
    const journalContainer = document.querySelector(".journal-container");
    journalHeaderStore.setJournalListAll(journalItems);
    const jounalList = journalHeaderStore.journalListAll;
    jounalList.forEach((item) => {
      journalContainer.appendChild(item.element);
    });
  };

  loadJournalItems().catch((error) => console.error(error));

  return journalListEl;
};

export default createJournalList;

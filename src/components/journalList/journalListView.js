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
        ? journalHeaderStore.getJournalListAll()
        : journalHeaderStore.getJournalSubscribe();

    if (journalList.size === 0) {
      const nullSubscribeHTML = `<div class="journal-empty Font_display">
      <span>구독한 언론사가 없습니다...</span></br>
      <img src="./src/assets/icons/크롱.png">
      </div>`;
      journalContainer.innerHTML = nullSubscribeHTML;
    } else {
      batchJournalList(journalList);
    }
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
        return new Journal(journalData, journalHeaderStore);
      });
      return journals;
    } catch (error) {
      console.error(error);
    }
  };

  const loadJournalItems = async () => {
    const journalURL = "http://localhost:3000/journal";
    const journalItems = await fetchJournalData(journalURL);
    journalHeaderStore.setJournalListAll(journalItems);
    const jounalList = journalHeaderStore.journalListAll;
    batchJournalList(jounalList);
  };

  const createBatchContainer = () => {
    const batchContainer = document.createElement("div");
    batchContainer.className = "journal-batch";
    return batchContainer;
  };

  const batchJournalList = (jounalList) => {
    const journalContainer = document.querySelector(".journal-container");
    const batchSize = 24;
    let batchCount = 0;
    let batchContainer = createBatchContainer();
    jounalList.forEach((item) => {
      journalContainer.appendChild(batchContainer);
      batchContainer.appendChild(item.element);
      batchCount++;
      if (batchCount === batchSize) {
        batchContainer = createBatchContainer();
        batchCount = 0;
      }
    });
  };

  loadJournalItems().catch((error) => console.error(error));

  return journalListEl;
};

export default createJournalList;

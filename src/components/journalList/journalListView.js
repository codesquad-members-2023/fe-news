import { JournalHeader } from "./journalHeader.js";
import { Journal } from "./journal.js";
import { Track } from "./journalTrack.js";
import { dataRequestToAPI } from "../../api/fetchData.js";
import { JournalHeaderStore } from "../../store/journalHeaderStore.js";
import { JournalTrackStore } from "../../store/journalTrackStore.js";

const createJournalList = () => {
  const journalListEl = document.createElement("article");
  journalListEl.classList.add("news-stand-jounalList");

  const updateJournalData = (state) => {
    journalTrack.render();
    const journalContainer = document.querySelector(".journal-container");
    journalContainer.innerHTML = "";
    const journalList =
      state === "STATE_ALL"
        ? journalHeaderStore.getJournalListAll()
        : journalHeaderStore.getJournalSubscribe();

    if (journalList.size === 0) {
      const batchContainer = createBatchContainer();
      const nullSubscribeHTML = `<div class="journal-empty Font_display">
      <span>구독한 언론사가 없습니다...</span></br>
      <img src="./src/assets/icons/크롱.png">
      </div>`;
      batchContainer.innerHTML = nullSubscribeHTML;
      journalContainer.appendChild(batchContainer);
      const batchElments = document.querySelectorAll(".journal-batch");
      journalTrackStore.setBatchSize(batchElments);
    } else {
      batchJournalList(journalList);
      const batchElments = document.querySelectorAll(".journal-batch");
      journalTrackStore.setBatchSize(batchElments);
      journalTrack.addButton();
      journalTrack.addEvent();
    }
  };

  const journalHeaderStore = new JournalHeaderStore(updateJournalData);
  const journalHeader = new JournalHeader(journalHeaderStore);
  journalListEl.appendChild(journalHeader.element);

  const journalTrackStore = new JournalTrackStore();
  const journalTrack = new Track(journalTrackStore);
  journalListEl.appendChild(journalTrack.element);

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
    const journalList = journalHeaderStore.journalListAll;
    const dividedJournalList = journalList.splice(0, 96);
    batchJournalList(dividedJournalList);
    const batchElments = document.querySelectorAll(".journal-batch");
    journalTrackStore.setBatchSize(batchElments);
    journalTrack.addButton();
    journalTrack.addEvent();
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

import { JournalHeader } from "./journalHeader.js";
import { Journal } from "./journal.js";
import { Track } from "./journalTrack.js";
import { dataRequestToAPI } from "../../api/fetchData.js";
import { JournalHeaderStore } from "../../store/journalHeaderStore.js";
import { JournalTrackStore } from "../../store/journalTrackStore.js";
import { JournalDetailStore } from "../../store/journalDetailStore.js";

// 뉴스 스탠드 언론사 영역 전체 View 함수
const createJournalList = () => {
  const journalListEl = document.createElement("article");
  journalListEl.classList.add("news-stand-jounalList");

  // 전체 언론사 <-> 내가 구독한 언론사
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

  // 디테일 <-> 그리드
  const updateJournalDetail = (frame) => {
    const journalContainer = document.querySelector(".journal-container");
    journalContainer.innerHTML = "";
    const currentState = journalHeaderStore.getState();
    frame === "FRAME_GRID"
      ? journalHeaderStore.setState(currentState)
      : renderJournalDetail();
  };

  // 언론사 영역 헤더 구성
  const journalHeaderStore = new JournalHeaderStore(
    updateJournalData,
    updateJournalDetail
  );
  const journalHeader = new JournalHeader(journalHeaderStore);
  journalListEl.appendChild(journalHeader.element);

  // 언론사 영역 트렉 구성
  const journalTrackStore = new JournalTrackStore();
  const journalTrack = new Track(journalTrackStore);
  journalListEl.appendChild(journalTrack.element);

  const fetchJournalData = async (journalURL) => {
    try {
      const journalDatas = await dataRequestToAPI(journalURL);
      const journals = journalDatas.map((journalData) => {
        return new Journal(journalData, journalHeaderStore, journalDetailStore);
      });
      return journals;
    } catch (error) {
      console.error(error);
    }
  };

  // 언론사 디테일 영역 구성
  const loadJournalDetail = async () => {
    const journalURL = "http://localhost:3000/journal";
    const journalItems = await fetchJournalData(journalURL);
    journalDetailStore.setDetailListAll(journalItems);
    journalDetailStore.setDetailByType();
  };

  const renderJournalDetail = () => {
    journalTrack.render();
    const journalContainer = document.querySelector(".journal-container");
    journalContainer.innerHTML = "";
    const journalDetailItems = journalDetailStore.detailListAll;
    journalDetailItems.forEach((journalItem) => {
      const batchContainer = createBatchContainer();
      batchContainer.appendChild(journalItem.detailElement);
      journalContainer.appendChild(batchContainer);
    });
    const batchElments = document.querySelectorAll(".journal-batch");
    journalTrackStore.setBatchSize(batchElments);
    journalTrack.addButton();
    journalTrack.addEvent();
  };

  const journalDetailStore = new JournalDetailStore(renderJournalDetail);
  loadJournalDetail();

  // 최초 언론사 Grid 영역 구성
  const loadJournalItems = async () => {
    const journalURL = "http://localhost:3000/journal";
    const journalItems = await fetchJournalData(journalURL);
    const dividedJournalItems = journalItems.splice(0, 96);
    journalHeaderStore.setJournalListAll(dividedJournalItems);
    const journalList = journalHeaderStore.journalListAll;
    batchJournalList(journalList);
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
      batchContainer.appendChild(item.gridElement);
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

import { JournalHeader } from "./journalHeader.js";
import { Journal } from "./journal.js";
import { Track } from "./journalTrack.js";
import { dataRequestToAPI } from "../../api/fetchData.js";
import { JournalHeaderStore } from "../../store/journalHeaderStore.js";
import { JournalTrackStore } from "../../store/journalTrackStore.js";
import { JournalDetailStore } from "../../store/journalDetailStore.js";

// 뉴스 스탠드 언론사 영역 전체 View 함수
const createJournalList = () => {
  // 언론사 영역 엘리먼트 생성
  const journalListEl = document.createElement("article");
  journalListEl.classList.add("news-stand-jounalList");

  // 전체 언론사 <-> 내가 구독한 언론사
  const updateJournalData = (state) => {
    const currentFrame = journalHeaderStore.getFrame();
    if (currentFrame === "FRAME_DETAIL") {
      const journalHeaderState = journalHeaderStore.getState();
      updateJournalDetail(journalHeaderState);
      return;
    }
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

  // DB DATA에 있는 언론사 인스턴스 생성
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

  // 언론사 헤더 스토어 생성
  const journalHeaderStore = new JournalHeaderStore(
    updateJournalData,
    updateJournalDetail
  );

  // 언론사 헤더 생성
  const journalHeader = new JournalHeader(journalHeaderStore);
  journalListEl.appendChild(journalHeader.element);

  // 언론사 트렉, 트렉 스토어 생성
  const journalTrackStore = new JournalTrackStore();
  const journalTrack = new Track(journalTrackStore);
  journalListEl.appendChild(journalTrack.element);

  // batch 페이지에 언론사 디테일 삽입
  const renderJournalDetail = () => {
    journalTrack.render();
    journalTrack.getDetailNavHTML();
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

  // 언론사 디테일 영역 구성
  const loadJournalDetail = async () => {
    const journalURL = "http://localhost:3000/journal";
    const journalItems = await fetchJournalData(journalURL);
    journalDetailStore.setDetailListAll(journalItems);
    journalDetailStore.setDetailByType();
  };

  // 언론사 디테일 스토어 생성
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

  // Track에 들어갈 batch 페이지 생성
  const createBatchContainer = () => {
    const batchContainer = document.createElement("div");
    batchContainer.className = "journal-batch";
    return batchContainer;
  };

  // batch 페이지에 언론사 리스트 그리드 삽입
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

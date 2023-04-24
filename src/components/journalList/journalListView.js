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
      updateJournalDetail(currentFrame);
      return;
    }

    journalTrack.render();

    const journalContainer = document.querySelector(".journal-container");
    journalContainer.innerHTML = "";

    const journalList =
      state === "STATE_ALL"
        ? journalHeaderStore.getJournalListAll()
        : journalHeaderStore.getJournalSubscribe();

    journalList.size === 0
      ? showEmptySubscribePage(journalContainer)
      : showSubscribePage(journalList);
  };

  const showEmptySubscribePage = (journalContainer) => {
    const batchContainer = createBatchContainer();
    const nullSubscribeHTML = `
    <div class="journal-empty Font_display">
    <span>구독한 언론사가 없습니다...</span></br>
    <img src="./src/assets/icons/크롱.png">
    </div>
    `;

    batchContainer.innerHTML = nullSubscribeHTML;
    journalContainer.appendChild(batchContainer);
  };

  const showSubscribePage = (journalList) => {
    batchJournalList(journalList);

    resetTrackButton();
  };

  // 디테일 <-> 그리드
  const updateJournalDetail = (frame) => {
    const journalContainer = document.querySelector(".journal-container");
    const currentState = journalHeaderStore.getState();

    journalContainer.innerHTML = "";
    frame === "FRAME_GRID"
      ? journalHeaderStore.setState(currentState)
      : renderJournalDetail(currentState);
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

  // 언론사 디테일 리스트 뽑기
  const loadJournalDetail = async () => {
    const journalURL = "http://localhost:3000/journal";
    const journalItems = await fetchJournalData(journalURL);

    const currentJournalType = journalDetailStore.getCurrentJournalType();
    const chosenJounralList = journalItems.filter((journal) => {
      if (journal.journalData.mediaInfo.type === currentJournalType) {
        return true;
      }
      return false;
    });

    journalDetailStore.setDetailListAll(chosenJounralList);
  };

  // batch 페이지에 언론사 디테일 삽입
  const renderJournalDetail = (currentState) => {
    journalTrack.render();
    const journalContainer = document.querySelector(".journal-container");
    journalContainer.innerHTML = "";

    currentState === "STATE_ALL"
      ? showJournalDetailAll(journalContainer)
      : showJournalDetailSub(journalContainer);

    resetTrackButton();
  };

  // 언론사 디테일 구속 리스트 전체 보여주기
  const showJournalDetailAll = (journalContainer) => {
    journalTrack.getDetailNavHTML();
    journalTrack.addDetailNavEvent();

    const journalDetailAllItems = journalDetailStore.getDetailListAll();

    createJournalDetailItems(journalContainer, journalDetailAllItems);
  };

  // 언론사 디테일 구독 리스트 보여주기
  const showJournalDetailSub = (journalContainer) => {
    const journalDetailSubItems = journalHeaderStore.journalSubscribe;

    journalDetailSubItems.size === 0
      ? showEmptySubscribePage(journalContainer)
      : createJournalDetailItems(journalContainer, journalDetailSubItems);
  };

  // 언론사 디테일 스토어 생성
  const journalDetailStore = new JournalDetailStore(
    loadJournalDetail,
    renderJournalDetail
  );

  // 언론사 트렉, 트렉 스토어 생성
  const journalTrackStore = new JournalTrackStore();
  const journalTrack = new Track(journalTrackStore, journalDetailStore);
  journalListEl.appendChild(journalTrack.element);

  const createJournalDetailItems = (
    journalContainer,
    journalDetailAllItems
  ) => {
    journalDetailAllItems.forEach((journalItem) => {
      const batchContainer = createBatchContainer();
      batchContainer.appendChild(journalItem.detailElement);
      journalContainer.appendChild(batchContainer);
    });
  };

  // 최초 언론사 Grid 영역 구성
  const loadJournalItems = async () => {
    const journalURL = "http://localhost:3000/journal";
    const journalItems = await fetchJournalData(journalURL);

    const dividedJournalItems = journalItems.splice(0, 96);
    journalHeaderStore.setJournalListAll(dividedJournalItems);

    const journalList = journalHeaderStore.journalListAll;
    batchJournalList(journalList);

    resetTrackButton();
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

  const resetTrackButton = () => {
    const batchElments = document.querySelectorAll(".journal-batch");
    journalTrackStore.setBatchSize(batchElments);
    journalTrack.addButton();
    journalTrack.addEvent();
  };

  loadJournalItems().catch((error) => console.error(error));
  loadJournalDetail().catch((error) => console.error(error));

  return journalListEl;
};

export default createJournalList;

import { getJournal } from "../../api/getData.js";
import { Carousel } from "./journalCarousel.js";
import { Journal } from "./journalClass.js";
import JournalStore from "../../store/journalStore.js";

const createNewsStandJournal = () => {
  // 언론사 영역
  const journalListEl = document.createElement("article");
  journalListEl.classList.add("news-stand-jounalList");

  // 언론사 헤더
  const journalHeader = `<header class="journal-header">
    <div class="journal-area">
        <div class="journal-all Title-MD">전체 언론사</div>
        <div class="journal-mine Body-MD">내가 구독한 언론사</div>
    </div>
    <div class="journal-btns">
        <div class="journal-btn__detail">
            <img src="src/assets/icons/list-view.svg" />
        </div>
    <div class="journal-btn__grid">
            <img src="src/assets/icons/grid-view-on.svg" />
        </div>
    </div>
</header>`;

  journalListEl.innerHTML += journalHeader;

  // 언론사 캐러셀
  const journalCarousel = new Carousel();
  journalListEl.innerHTML += journalCarousel.beElement();

  return { journalListEl, journalCarousel };
};

// 각 언론사 생성
const renderJournal = () => {
  const journalURL = "http://localhost:3000/journal";

  getJournal(journalURL).then((journalData) => {
    const journal = new Journal(journalData);
    const journalItems = journal.makeJournal();
    const journalContainer = document.querySelector(".journal-container");
    const shuffledItems = journalItems.sort(() => 0.5 - Math.random());
    shuffledItems.forEach((item) => {
      journalContainer.appendChild(item);

      // JournalStore에 Journal 인스턴스 저장
      JournalStore.dispatch({
        type: "SET_JOURNAL_LIST",
        journalList: [...JournalStore.getState().journalList, item],
      });
    });
  });
};

export { createNewsStandJournal, renderJournal };

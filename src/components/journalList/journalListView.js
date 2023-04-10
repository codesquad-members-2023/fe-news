import { getJournal } from "../../api/getData.js";
import { Carousel } from "./journalCarousel.js";

const createNewsStandJournal = () => {
  const journalURL = " http://localhost:3000/journal";

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

  // 언론사 리스트
  const journalCarousel = new Carousel();
  journalListEl.innerHTML += journalCarousel.beElement();

  getJournal(journalURL).then((journalItems) => {
    const journalContainer = document.querySelector(".journal-container");
    const shuffledItems = journalItems.sort(() => 0.5 - Math.random());
    shuffledItems.forEach((item) => {
      journalContainer.appendChild(item);
    });
  });

  return { journalListEl, journalCarousel };
};

export default createNewsStandJournal;

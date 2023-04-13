import { createNewsStandHeader } from "./components/header/headerView.js";
import { createNewsStandHeadLine } from "./components/headLine/headLineView.js";
import {
  createNewsStandJournal,
  createJournalHeader,
  createJournalCarousel,
  renderJournal,
} from "./components/journalList/journalListView.js";

// main 구성
const init = () => {
  const mainSpace = document.createElement("main");
  mainSpace.classList.add("news-stand");
  document.body.appendChild(mainSpace);

  const journalListEl = createNewsStandJournal();
  const journalHeader = createJournalHeader();

  journalListEl.innerHTML += journalHeader;

  // main에 헤더. 헤드라인, 언론사 추가
  mainSpace.append(
    createNewsStandHeader(),
    createNewsStandHeadLine(),
    journalListEl
  );

  const journalCarousel = createJournalCarousel();
  journalListEl.innerHTML += journalCarousel.beElement();
  journalCarousel.addEvent();

  renderJournal().then((journalItems) => {
    const journalContainer = document.querySelector(".journal-container");
    const shuffledItems = journalItems.sort(() => 0.5 - Math.random());
    shuffledItems.forEach((item) => {
      journalContainer.appendChild(item);
    });
  });
};

init();

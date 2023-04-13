import { createNewsStandHeader } from "./components/header/headerView.js";
import { createNewsStandHeadLine } from "./components/headLine/headLineView.js";
import {
  createNewsStandJournal,
  renderJournal,
} from "./components/journalList/journalListView.js";

// main 구성
const init = () => {
  const mainSpace = document.createElement("main");
  mainSpace.classList.add("news-stand");
  document.body.appendChild(mainSpace);

  const journalSpace = createNewsStandJournal();

  // main에 헤더. 헤드라인, 언론사 추가
  mainSpace.append(
    createNewsStandHeader(),
    createNewsStandHeadLine(),
    journalSpace.journalListEl
  );

  // journal 캐러셀에 이벤트 부여
  journalSpace.journalCarousel.addEvent();

  // 언론사 렌더링
  renderJournal();
};

init();

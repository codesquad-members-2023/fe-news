import { createNewsStandHeader } from "./components/header/headerView.js";
import { createNewsStandHeadLine } from "./components/headLine/headLineView.js";
import createNewsStandJournal from "./components/journalList/journalListView.js";

// main 구성
const mainTag = document.createElement("main");
mainTag.classList.add("news-stand");
document.body.appendChild(mainTag);

const test = createNewsStandJournal();

// main에 헤더. 헤드라인, 언론사 추가
mainTag.append(
  createNewsStandHeader(),
  createNewsStandHeadLine(),
  test.journalListEl
);

test.journalCarousel.addEvent();

import { createNewsStandHeader } from "./components/header/headerView.js";
import { createNewsStandHeadLine } from "./components/headLine/headLineView.js";
import createJournalList from "./components/journalList/journalListView.js";

// main 구성
const init = () => {
  const mainSpace = document.createElement("main");
  mainSpace.classList.add("news-stand");
  document.body.appendChild(mainSpace);

  // main에 헤더. 헤드라인, 언론사 추가
  mainSpace.append(
    createNewsStandHeader(),
    createNewsStandHeadLine(),
    createJournalList()
  );
};

init();

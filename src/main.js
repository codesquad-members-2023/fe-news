import { headerEl } from "./components/header/headerView.js";
import { headLineEl } from "./components/headLine/headLineView.js";
import { journalListEl } from "./components/journalList/journalListView.js";

// main 구성
const mainTag = document.createElement("main");
mainTag.classList.add("news-stand");
document.body.appendChild(mainTag);

// main에 헤더. 헤드라인, 언론사 추가
mainTag.append(headerEl, headLineEl, journalListEl);

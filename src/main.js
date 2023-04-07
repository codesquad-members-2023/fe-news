import { headerEl } from "./components/header/headerView.js";
import { headLineEl } from "./components/headLine/headLineView.js";
import { journalListEl } from "./components/journalList/journalListView.js";

// main 구성
const mainTag = document.createElement("main");
mainTag.classList.add("news-stand");
document.body.appendChild(mainTag);

// // header 구성
// mainTag.appendChild(headerEl);

// // headLine 구성
// mainTag.appendChild(headLineEl);

// // journal 구성
// mainTag.appendChild(journalListEl);

mainTag.append(headerEl, headLineEl, journalListEl);

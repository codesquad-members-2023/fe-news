import { headerEl } from "./components/header/headerView.js";
import { getHeadLine } from "./api/getHeadLineData.js";

// main 구성
const mainTag = document.createElement("main");
mainTag.classList.add("news-stand");
document.body.appendChild(mainTag);

// header 구성
mainTag.appendChild(headerEl);

// headLine 구성
getHeadLine("http://localhost:3000/headLineHot");
getHeadLine("http://localhost:3000/headLine");

// journal 구성

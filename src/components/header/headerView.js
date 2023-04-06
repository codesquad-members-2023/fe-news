import { getTodayNotice } from "./todayNotice.js";

export const headerEl = document.createElement("header");

headerEl.classList.add("news-stand-header");
const headerElHtml = `<div class="header-left display">
    <img src="src/assets/icons/NewsLogo.svg" /><span>뉴스스탠드</span>
 </div>
 <div class="header-right">
    ${getTodayNotice()}
 </div>`;

headerEl.innerHTML = headerElHtml;

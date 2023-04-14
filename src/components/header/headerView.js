import { getTodayNotice } from "./todayNotice.js";

export const createNewsStandHeader = () => {
  const headerEl = document.createElement("header");
  headerEl.classList.add("news-stand-header");
  headerEl.classList.add("news-stand-component_size");
  const headerElHtml = `<div class="flex-start header-left Font_display">
    <img src="src/assets/icons/NewsLogo.svg" /><span>뉴스스탠드</span>
 </div>
 <div class="flex-center">
    ${getTodayNotice()}
 </div>`;

  headerEl.innerHTML = headerElHtml;
  return headerEl;
};

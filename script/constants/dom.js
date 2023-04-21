import { makeDate } from "../view/newsHeader.js";
export const COMPANY = Object.freeze({
  FIRST_PAGE: 0,
  SECOND_PAGE: 1,
  THIRD_PAGE: 2,
  LAST_PAGE: 3,
  TOTAL_GRID: 96,
  PAGES_PER: 24,
});
export const ROLLING = Object.freeze({ TOTAL: 5 });
export const SUBSCRIBE = Object.freeze({ REGISTER: "+구독하기", CANCEL: "+해지하기" });
export const TEMPLATE = {
  header: `<div class="news__header">
  <div class="heder__logo">
  <a onClick="window.location.reload()" style="cursor: pointer;">
  <img class = "logo_img" src="assets/newsPaper.svg"></a>
  <span class= "logo_text">뉴스스탠드</span>
  </div>
  <div class="header__date">${makeDate()}</div>
  </div>`,
  rollingBar: `<div class= "news__rolling-bar">
  <div class= "rolling-bar_left">
  <img src="assets/rollingLogo.svg" /><ul class="data_list_left"></ul></div>
  <div class= "rolling-bar_right">
  <img src="assets/rollingLogo.svg" /><ul class="data_list_right"></ul></div>
  </div>`,
  newsCompanyBar: `
  <div class="news-company">
  <div class="news-company__bar">
    <div class="company__choice">
      <span class="company__choice_all">전체 언론사</span>
      <span class="company__choice_subscribe">내가 구독한 언론사</span>
    </div>
    <div class="company__view">
      <object id="company__view_detail" type="image/svg+xml" data="assets/viewDetail.svg">
        <img />
      </object>
      <object id="company__view_logo" type="image/svg+xml" data="assets/viewLogo.svg">
        <img />
      </object>
    </div>
  </div>
</div>
`,
  newsCompanyGrid: `
  <div class="grid_btn-left"><img src="assets/leftButton.svg" /></div>
  <div class="grid_set">
    <div class="grid_all">
      <div class="all_first-page" index="0"></div>
      <div class="all_second-page none"></div>
      <div class="all_third-page none"></div>
      <div class="all_fourth-page none"></div>
    </div>
    <div class="grid_subscribe"></div>
  </div>
  <div class="grid_btn-right"><img src="assets/rightButton.svg" /></div>
`,
  newsCompanyDetail: `
<div class="detail_btn-left"><img src="assets/leftButton.svg" /></div>
<div class="news_detail_container"></div>
<div class="detail_btn-right"><img src="assets/rightButton.svg" /></div>
</div>`,
  newsDetailSubscribe: `
<div class="news_category-bar">
<div class="category-economy">종합/경제</div>
<div class="category-broadcast">방송/통신</div>
<div class="category-it">IT</div>
<div class="category-engilsh">영자지</div>
<div class="category-sports">스포츠/연예</div>
<div class="category-magazine">매거진/전문지</div>
<div class="category-area">지역</div>
</div>`,
};

const newsCompanyTemplate = () => `
<div class="news-company">
<div class="news-company__bar">
  <div class="company__choice">
    <span class="company__choice_all">전체 언론사</span>
    <span class="company__choice_subscribe">내가 구독한 언론사</span>
  </div>
  <div class = "company__view">
    <img class= "company__view_detail" src="assets/viewDetail.svg"/>
    <img class=" company__view_logo" src="assets/viewLogo.svg"/>
  </div>
  </div>
  <div class="news-company__grid">
    <div class="grid_btn-left"><img src="assets/leftButton.svg"/></div>
    <div class="grid_set"></div>
    <div class="grid_btn-right"><img src="assets/rightButton.svg"/></div>
  </div>
</div>
`;
const renderNewsCompanyBar = () => {
  const root = document.querySelector(".root");
  const newsCompanyBar = document.createElement("section");
  root.appendChild(newsCompanyBar);
  newsCompanyBar.innerHTML = newsCompanyTemplate();
};

const insertNewsCompanyGrid = (newsData) => {
  const gridBox = document.querySelector(".grid_set");
  newsData.map((data) => {
    gridBox.innerHTML += `<div><img src=${data.imgSrc} alt=${data.alt}/></div>`;
  });
};
export { renderNewsCompanyBar, insertNewsCompanyGrid };

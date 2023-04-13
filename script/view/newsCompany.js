const newsCompanyTemplate = `
<div class="news-company__choice">
<span class="choice_all">전체 언론사</span>
<span class="choice_subscribe">내가 구독한 언론사</span>
</div>
<div class = "news-company__view">
<img class="view_detail">
</img>
`;
const viewAllNewsCommpany = () => {
  const root = document.querySelector(".root");
  const newsRollingBar = document.createElement("section");
  root.appendChild(newsRollingBar);
  newsRollingBar.innerHTML = rollingBarTemplate();
};

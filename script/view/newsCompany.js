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
  const rightButton = document.querySelector(".grid_btn-right");
  const leftButton = document.querySelector(".grid_btn-left");
  let page = 0;

  const eventHandler = () => {
    rightButton.addEventListener("click", () => {
      controlButton();
      page += 1;
      insertNewsData();
    });
    leftButton.addEventListener("click", () => {
      controlButton();
      page -= 1;
      insertNewsData();
    });
  };
  eventHandler();

  const controlButton = () => {
    if (page > 1) {
      leftButton.classList.remove("hidden");
    } else {
      leftButton.classList.add("hidden");
    }
    if (page < 2) {
      rightButton.classList.remove("hidden");
    } else {
      rightButton.classList.add("hidden");
    }
  };
  controlButton();

  const insertNewsData = () => {
    gridBox.innerHTML = "";
    newsData[page].map((data) => {
      gridBox.innerHTML += `<div id="${data.mediaId}"><img src=${data.mediaInfo.imgSrc} alt=${data.mediaInfo.name}/></div>`;
    });
  };
  insertNewsData();
};
const showsubscribeButton = () => {
  const newsCompanyGrid = document.querySelector(".grid_set");
  const subscribeButton = document.createElement("button", { class: "subscribe-btn" });
  newsCompanyGrid.addEventListener("mouseover", (e) => {
    e.target.append(subscribeButton);
  });
};
export { renderNewsCompanyBar, insertNewsCompanyGrid };

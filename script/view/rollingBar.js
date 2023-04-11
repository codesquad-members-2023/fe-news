const rollingBarTemplate = () =>
  `<div class= "news__rolling-bar">
  <div class= "rolling-bar_left">
  <img src="assets/rollingLogo.svg" /><ul class="data_list_left"></ul></div>
  <div class= "rolling-bar_right">
  <img src="assets/rollingLogo.svg" /><ul class="data_list_right"></ul></div>
  </div>`;

const viewRollingBar = () => {
  const root = document.querySelector(".root");
  const newsRollingBar = document.createElement("article");
  root.appendChild(newsRollingBar);
  newsRollingBar.innerHTML = rollingBarTemplate();
};

const insertNewsData = (newsData, rollingBox) => {
  const rollingBar = document.querySelector(`.${rollingBox}`);
  newsData.forEach((data) => {
    rollingBar.innerHTML += `<li>${data.headLine}</li>`;
  });
};

export { viewRollingBar, insertNewsData };

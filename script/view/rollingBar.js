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

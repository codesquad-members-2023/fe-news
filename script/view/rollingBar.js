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
  const rollingBar = document.querySelector(`${rollingBox}`);
  newsData.forEach((data) => {
    rollingBar.innerHTML += `<li>${data}</li>`;
  });
};

const rollingData = (className) => {
  const rollingBar = document.querySelector(className);
  let startTime = null;
  const autoRolling = (timestamp) => {
    if (!startTime) startTime = timestamp;

    const progress = timestamp - startTime;
    if (progress >= 5000) {
      rollingBar.style.transform = `translate3d(0, -31px, 0)`;
      rollingBar.style.transitionDuration = "500ms";

      startTime = timestamp;
    }
    rollingBar.ontransitionend = () => {
      rollingBar.removeAttribute("style");
      rollingBar.appendChild(rollingBar.firstChild);
    };
    requestAnimationFrame(autoRolling);
  };
  autoRolling();
};
export { viewRollingBar, insertNewsData, rollingData };

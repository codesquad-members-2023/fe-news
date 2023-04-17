const rollingBarTemplate = () =>
  `<div class= "news__rolling-bar">
  <div class= "rolling-bar_left">
  <img src="assets/rollingLogo.svg" /><ul class="data_list_left"></ul></div>
  <div class= "rolling-bar_right">
  <img src="assets/rollingLogo.svg" /><ul class="data_list_right"></ul></div>
  </div>`;

const renderRollingBar = (root) => {
  const newsRollingBar = document.createElement("article");
  root.appendChild(newsRollingBar);
  newsRollingBar.innerHTML = rollingBarTemplate();
};

const insertNewsData = (newsData, rollingBox) => {
  const rollingBar = document.querySelector(`${rollingBox}`);
  newsData.map((data) => {
    rollingBar.innerHTML += `<li>${data}</li>`;
  });
};

const rollingData = (rollingBox) => {
  const rollingBar = document.querySelector(rollingBox);
  let startTime = null;
  let handle = null;

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
    handle = requestAnimationFrame(autoRolling);
  };
  autoRolling();

  const start = () => {
    if (!handle) handle = requestAnimationFrame(autoRolling);
  };
  const stop = () => {
    if (handle) cancelAnimationFrame(handle);
    handle = null;
  };
  const eventHandler = () => {
    rollingBar.addEventListener("mouseover", stop);
    rollingBar.addEventListener("mouseout", start);
  };
  eventHandler();
};

const runRollingBar = () => {
  const root = document.querySelector(".root");
  renderRollingBar(root);
  rollingData(".data_list_left");
  setTimeout(() => {
    rollingData(".data_list_right");
  }, 1000);
};

export { runRollingBar, insertNewsData, rollingData };

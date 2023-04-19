import { $ } from "../utils/dom.js";

const renderRollingBar = (selector, element) => {
  const rollingBarTemplate = `<div class= "news__rolling-bar">
  <div class= "rolling-bar_left">
  <img src="assets/rollingLogo.svg" /><ul class="data_list_left"></ul></div>
  <div class= "rolling-bar_right">
  <img src="assets/rollingLogo.svg" /><ul class="data_list_right"></ul></div>
  </div>`;
  const root = $(selector);
  const newsRollingBar = document.createElement(element);
  root.appendChild(newsRollingBar);
  newsRollingBar.innerHTML = rollingBarTemplate;
};

export const insertNewsHeadlineData = (headlineData, selector) => {
  const rollingBar = $(selector);
  headlineData.map((headline) => {
    rollingBar.innerHTML += `<li>${headline}</li>`;
  });
};

export const autoRoll = (selector, interval) => {
  const rollingBar = $(selector);
  let startTime = null;
  let handle = null;

  const autoRolling = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    if (progress >= interval) {
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

  const onEvents = () => {
    rollingBar.addEventListener("mouseover", stop);
    rollingBar.addEventListener("mouseout", start);
  };
  onEvents();
};

export const runRollingBar = () => {
  renderRollingBar(".root", "article");
  autoRoll(".data_list_left", 5000);
  setTimeout(() => {
    autoRoll(".data_list_right", 5000);
  }, 1000);
};

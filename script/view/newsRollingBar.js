import { $ } from "../utils/dom.js";

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
  autoRoll(".data_list_left", 5000);
  setTimeout(() => {
    autoRoll(".data_list_right", 5000);
  }, 1000);
};

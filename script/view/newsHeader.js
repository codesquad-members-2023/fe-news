import { insertNewsHeader } from "../store/insertNewsHeader.js";
import { insertRollingBar } from "../store/insertRollingBar.js";

const set = { root: document.querySelector(".root"), newsHeader: document.createElement("header"), newsRollingBar: document.createElement("article") };

const viewNewsHeader = () => {
  set.root.appendChild(set.newsHeader);
  set.newsHeader.innerHTML = insertNewsHeader();
};
const viewRollingBar = () => {
  set.root.appendChild(set.newsRollingBar);
  set.newsRollingBar.innerHTML = insertRollingBar();
};
export { viewNewsHeader, viewRollingBar };

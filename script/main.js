import { fetchManeger } from "./controller/fetchManager.js";
import { viewNewsHeader } from "./view/newsHeader.js";
import { rollingData, viewRollingBar } from "./view/rollingBar.js";
const main = () => {
  viewNewsHeader();
  viewRollingBar();
  fetchManeger();
  rollingData();
};

main();

import { fetchManeger } from "./controller/fetchManeger.js";
import { viewNewsHeader } from "./view/newsHeader.js";
import { viewRollingBar } from "./view/rollingBar.js";
const main = () => {
  viewNewsHeader();
  viewRollingBar();
  fetchManeger();
};

main();

import { runRollingBar } from "./view/newsRollingBar.js";
import { preprocessData } from "./controller/viewController.js";
import { render } from "./view/dom.js";
export const app = () => {
  render();
  runRollingBar();
  preprocessData();
};
app();

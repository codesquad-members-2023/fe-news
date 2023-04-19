import { renderNewsHeader } from "./view/newsHeader.js";
import { runRollingBar } from "./view/newsRollingBar.js";
import { renderNewsCompanyBar } from "./view/newsCompany.js";
import { preprocessData } from "./controller/viewController.js";
export const app = () => {
  renderNewsHeader(".root", "header");
  runRollingBar();
  renderNewsCompanyBar(".root", "section");
  preprocessData();
};
app();

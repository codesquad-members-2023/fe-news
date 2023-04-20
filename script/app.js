import { runRollingBar } from "./view/newsRollingBar.js";
import { preprocessData } from "./controller/viewController.js";
import { renderMaker } from "./utils/dom.js";
import { TEMPLATE } from "./constants/dom.js";
export const app = () => {
  const { header, rollingBar, newsCompanyBar, newsCompanyGrid, newsCompanyDetail } = TEMPLATE;
  renderMaker(".root", "header", header);
  renderMaker(".root", "article", rollingBar);
  runRollingBar();
  renderMaker(".root", "section", newsCompanyBar);
  renderMaker(".news-company", "div", newsCompanyGrid, ["news-company__grid"]);
  renderMaker(".news-company", "div", newsCompanyDetail, ["news-company__detail", "none"]);
  preprocessData();
};
app();

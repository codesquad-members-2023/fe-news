import { runRollingBar } from "./newsRollingBar.js";
import { preprocessData } from "../controller/viewController.js";
import { renderMaker } from "../utils/dom.js";
import { TEMPLATE } from "../constants/dom.js";
export const render = () => {
  const { header, rollingBar, newsCompanyBar, newsCompanyGrid, newsCompanyDetail, newsDetailCategory, categoryDisplay } = TEMPLATE;
  renderMaker(".root", "header", header);
  renderMaker(".root", "article", rollingBar);
  renderMaker(".root", "section", newsCompanyBar);
  renderMaker(".news-company", "div", newsCompanyGrid, ["news-company__grid"]);
  renderMaker(".news-company", "div", newsCompanyDetail, ["news-company__detail", "none"]);
  renderMaker(".news_detail_container", "div", newsDetailCategory, ["news_category-bar"]);
  renderMaker(".news_detail_container", "div", categoryDisplay, ["news_category_display"]);
};

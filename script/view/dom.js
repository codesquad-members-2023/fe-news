import { runRollingBar } from "./newsRollingBar.js";
import { preprocessData } from "../controller/viewController.js";
import { renderMaker } from "../utils/dom.js";
import { TEMPLATE } from "../constants/dom.js";
export const render = () => {
  const { header, rollingBar, newsCompanyBar, newsCompanyGrid, newsCompanyDetail, newsDetailCategory, categoryDisplay } = TEMPLATE;
  renderMaker({ selector: ".root", element: "header", template: header });
  renderMaker({ selector: ".root", element: "article", template: rollingBar });
  renderMaker({ selector: ".root", element: "section", template: newsCompanyBar });
  renderMaker({ selector: ".news-company", element: "div", template: newsCompanyGrid, nameList: ["news-company__grid"] });
  renderMaker({ selector: ".news-company", element: "div", template: newsCompanyDetail, nameList: ["news-company__detail", "none"] });
  renderMaker({ selector: ".news_detail_container", element: "div", template: newsDetailCategory, nameList: ["news_category-bar"] });
  renderMaker({ selector: ".news_detail_container", element: "div", template: categoryDisplay, nameList: ["news_category_display"] });
};

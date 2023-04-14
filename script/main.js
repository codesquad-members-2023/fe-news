import { fetchManager } from "./controller/fetchManager.js";
import { renderNewsHeader } from "./view/newsHeader.js";
import { rollingData, renderRollingBar } from "./view/rollingBar.js";
import { renderNewsCompanyBar } from "./view/newsCompany.js";
const main = () => {
  renderNewsHeader();
  renderRollingBar();
  renderNewsCompanyBar();
  fetchManager();
};

main();

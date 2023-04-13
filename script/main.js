import { fetchManager } from "./controller/fetchManager.js";
import { viewNewsHeader } from "./view/newsHeader.js";
import { rollingData, viewRollingBar } from "./view/rollingBar.js";
import { viewNewsCompanyBar } from "./view/newsCompany.js";
const main = () => {
  viewNewsHeader();
  viewRollingBar();
  viewNewsCompanyBar();
  fetchManager();
};

main();

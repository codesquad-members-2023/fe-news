import { renderNewsHeader } from "./view/newsHeader.js";
import { runRollingBar } from "./view/newsRollingBar.js";
import { renderNewsCompanyBar } from "./view/newsCompany.js";
import { fetchController } from "./controller/controller.js";
const main = () => {
  renderNewsHeader();
  runRollingBar();
  renderNewsCompanyBar();
  fetchController();
};
main();

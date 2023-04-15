import { renderNewsHeader } from "./view/newsHeader.js";
import { rollingData, renderRollingBar } from "./view/newsRollingBar.js";
import { renderNewsCompanyBar } from "./view/newsCompany.js";
import { fetchController } from "./controller/controller.js";
const main = () => {
  renderNewsHeader();
  renderRollingBar();
  renderNewsCompanyBar();
  fetchController();
  rollingData(".data_list_left");
  setTimeout(() => {
    rollingData(".data_list_right");
  }, 1000);
};
main();

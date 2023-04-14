import { renderNewsHeader } from "./view/newsHeader.js";
import { rollingData, renderRollingBar } from "./view/newsRollingBar.js";
import { renderNewsCompanyBar } from "./view/newsCompany.js";
import { rollingController } from "./controller/controller.js";
const main = () => {
  renderNewsHeader();
  renderRollingBar();
  renderNewsCompanyBar();
  rollingController();
  rollingData(".data_list_left");
  setTimeout(() => {
    rollingData(".data_list_right");
  });
};
main();

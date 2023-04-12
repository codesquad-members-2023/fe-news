import { rollingController } from "./controller.js";
import { rollingData } from "../view/rollingBar.js";
const fetchManager = () => {
  rollingController();
  rollingData(".data_list_left");
  setTimeout(() => {
    rollingData(".data_list_right");
  }, 1000);
};

export { fetchManager };

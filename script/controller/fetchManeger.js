import { rollingController } from "./controller.js";
const fetchManeger = () => {
  rollingController("http://localhost:3001/rollingData");
};

export { fetchManeger };

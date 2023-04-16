import { insertNewsData } from "../view/newsRollingBar.js";
import { insertNewsCompanyGrid } from "../view/newsCompany.js";

const fetchController = () => {
  controller("http://localhost:3001/rollingData");
  controller("http://localhost:3001/logoData");
};
const controller = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (url === "http://localhost:3001/rollingData") {
        deliverRollingData(data, 0, data.length / 2, ".data_list_left");
        deliverRollingData(data, data.length / 2, data.length, ".data_list_right");
      }
      if (url === "http://localhost:3001/logoData") {
        deliverCompanyData(data);
      }
    })
    .catch((error) => console.error("Error:", error));
};

const deliverRollingData = (data, startData, endData, rollingBox) => {
  const result = Object.values(data).slice(startData, endData);
  insertNewsData(result, rollingBox);
};

const deliverCompanyData = (data) => {
  const result = Object.values(data).slice(0, 24);
  insertNewsCompanyGrid(result);
};
export { fetchController };

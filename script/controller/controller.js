import { insertNewsData } from "../view/newsRollingBar.js";

const fetchController = () => {
  rollingController("http://localhost:3001/rollingData");
};
const rollingController = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (url === "http://localhost:3001/rollingData") {
        deliverData(data, 0, data.length / 2, ".data_list_left");
        deliverData(data, data.length / 2, data.length, ".data_list_right");
      }
    })
    .catch((error) => console.error("Error:", error));
};
const deliverData = (data, startData, endData, rollingBox) => {
  const result = Object.values(data).slice(startData, endData);
  insertNewsData(result, rollingBox);
};
export { fetchController };

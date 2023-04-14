import { insertNewsData } from "../view/rollingBar.js";
const rollingController = () => {
  fetch("http://localhost:3001/rollingData")
    .then((res) => res.json())
    .then((data) => {
      deliverData(data, 0, data.length / 2, ".data_list_left");
      deliverData(data, data.length / 2, data.length, ".data_list_right");
    })
    .catch((error) => console.error("Error:", error));
};
const deliverData = (data, num1, num2, className) => {
  const newsData = [];
  for (let i = num1; i < num2; i++) {
    newsData.push(data[i].headLine);
  }
  insertNewsData(newsData, className);
};
export { rollingController };

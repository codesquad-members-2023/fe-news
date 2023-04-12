import { insertNewsData } from "../view/rollingBar.js";
const rollingController = () => {
  fetch("http://localhost:3001/rollingData")
    .then((res) => res.json())
    .then((data) => {
      rollingRightData(data);
      rollingLeftData(data);
    })
    .catch((error) => console.error("Error:", error));
};

const rollingRightData = (data) => {
  const leftData = [];
  for (let i = 0; i < data.length / 2; i++) {
    leftData.push(data[i].headLine);
  }
  insertNewsData(leftData, ".data_list_left");
};

const rollingLeftData = (data) => {
  const rightData = [];
  for (let i = data.length / 2; i < data.length; i++) {
    rightData.push(data[i].headLine);
  }
  insertNewsData(rightData, ".data_list_right");
};
export { rollingController };

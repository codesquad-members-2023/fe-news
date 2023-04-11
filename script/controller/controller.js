import { insertNewsData } from "../view/rollingBar.js";

const rollingController = (URL) => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      if ((URL = "http://localhost:3001/rollingData")) {
        rollingDataLeft(data);
        rollingDataRight(data);
      }
    })
    .catch((error) => consol.error("Error:", error));
};

const rollingDataLeft = (data) => {
  const leftData = [];
  for (let i = 0; i < data.length / 2; i++) {
    leftData.push(data[i].headLine);
  }
  insertNewsData(leftData, data_list_left);
};

const rollingDataRight = (data) => {
  const rightData = [];
  for (let i = data.length / 2; i < data.length; i++) {
    rightData.push(data[i].headLine);
  }
  insertNewsData(rightData, data_list_right);
};
insertRollingData();

export { rollingController };

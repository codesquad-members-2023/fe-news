import { insertNewsData } from "../view/newsRollingBar.js";
import { insertNewsCompanyGrid } from "../view/newsCompany.js";
import { API_PATH } from "../constants/api.js";

export const fetchController = async () => {
  const rollingData = await fetchRollingoData();
  const companyData = await fetchCompanyData();
  const rollingRandomDataLeft = fixedRandomData(rollingData.leftRollingData, 5);
  const rollingRandomDataRight = fixedRandomData(rollingData.rightRollingData, 5);
  const companyRandomData = fixedRandomData(companyData, 96);
  insertNewsData(rollingRandomDataLeft, ".data_list_left");
  insertNewsData(rollingRandomDataRight, ".data_list_right");
  deliverCompanyData(companyRandomData, 24);
};

export const fetchRollingoData = async () => {
  return await fetch(API_PATH.auto).then((res) => res.json());
};

export const fetchCompanyData = async () => {
  return await fetch(API_PATH.media).then((res) => res.json());
};

const randomData = (max) => {
  return Math.floor(Math.random() * max);
};

const fixedRandomData = (data, count) => {
  const fixedData = new Set();
  while (count > fixedData.size) {
    fixedData.add(data[randomData(data.length)]);
  }
  return [...fixedData]; //insertNewsData(result, rollingBox);
};

const deliverCompanyData = (data, size) => {
  const companyData = [];
  for (let i = 0; i < data.length; i += size) {
    companyData.push(data.slice(i, i + size));
  }
  insertNewsCompanyGrid(companyData);
};

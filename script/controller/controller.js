import { insertNewsData } from "../view/newsRollingBar.js";
import { insertNewsCompanyGrid } from "../view/newsCompany.js";
import { API_PATH } from "../constants/api.js";
import { COMPANY, ROLLING } from "../constants/dom.js";

export const fetchController = async () => {
  const rollingData = await fetchRollingoData();
  const companyData = await fetchCompanyData();
  const rollingRandomDataLeft = fixedRandomData(rollingData.leftRollingData, ROLLING.TOTAL);
  const rollingRandomDataRight = fixedRandomData(rollingData.rightRollingData, ROLLING.TOTAL);
  const companyRandomData = fixedRandomData(companyData, COMPANY.TOTAL_GRID);
  insertNewsData(rollingRandomDataLeft, ".data_list_left");
  insertNewsData(rollingRandomDataRight, ".data_list_right");
  deliverCompanyData(companyRandomData, COMPANY.PAGES_PER);
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
  const insertNewsCompany = new insertNewsCompanyGrid(companyData);
  insertNewsCompany.init();
};

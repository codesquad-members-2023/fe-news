import { insertNewsData } from "../view/newsRollingBar.js";
import { insertNewsCompanyGrid } from "../view/newsCompany.js";
import { API_PATH } from "../constants/api.js";
import { COMPANY, ROLLING } from "../constants/dom.js";

//fetch된 데이터를 불러오고, 데이터들을 각 렌더링 해주는 곳에 넣어준다.
export const fetchController = async () => {
  const rollingData = await fetchRollingoData();
  const gridData = await fetchCompanyData();
  const rollingRandomDataLeft = fixedRandomData(rollingData.leftRollingData, ROLLING.TOTAL);
  const rollingRandomDataRight = fixedRandomData(rollingData.rightRollingData, ROLLING.TOTAL);
  const gridRandomData = fixedRandomData(gridData, COMPANY.TOTAL_GRID);
  insertNewsData(rollingRandomDataLeft, ".data_list_left");
  insertNewsData(rollingRandomDataRight, ".data_list_right");
  deliverGridData(gridRandomData, COMPANY.PAGES_PER);
};

export const fetchRollingoData = async () => {
  return await fetch(API_PATH.auto).then((res) => res.json());
};

export const fetchCompanyData = async () => {
  return await fetch(API_PATH.media).then((res) => res.json());
};

//랜덤으로 번호를 뽑아낸다.
const makeRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

//랜덤 번호를 이용해서 확정된 랜덤 데이터를 return한다.
const fixedRandomData = (data, count) => {
  const fixedData = new Set();
  while (count > fixedData.size) {
    fixedData.add(data[makeRandomNumber(data.length)]);
  }
  return [...fixedData]; //insertNewsData(result, rollingBox);
};

//언론사 grid 부분에 데이터를 넣어준다.(총 각 페이지당 24가지여서, 각 24개씩 데이터를 묶는다.)
const deliverGridData = (spreadGridData, size) => {
  const gridDataPage = [];
  for (let i = 0; i < spreadGridData.length; i += size) {
    gridDataPage.push(spreadGridData.slice(i, i + size));
  }
  const insertNewsCompany = new insertNewsCompanyGrid(gridDataPage);
  insertNewsCompany.init();
};

import { insertNewsHeadlineData } from "../view/newsRollingBar.js";
import { reciveGridData } from "../view/mainContent/grid/entirePressGrid.js";
import { API_PATH } from "../constants/api.js";
import { COMPANY, ROLLING, category } from "../constants/dom.js";
import { reciveDetailData } from "../view/mainContent/detail/entirePressDetail.js";
//fetch된 데이터를 불러오고, 데이터들을 각 렌더링 해주는 곳에 넣어준다.
export const preprocessData = async () => {
  const rollingData = await fetchData(API_PATH.auto);
  const gridData = await fetchData(API_PATH.media);
  const rollingRandomDataLeft = fixedRandomData({ data: rollingData.leftRollingData, count: ROLLING.TOTAL });
  const rollingRandomDataRight = fixedRandomData({ data: rollingData.rightRollingData, count: ROLLING.TOTAL });
  const gridRandomData = fixedRandomData({ data: gridData, count: COMPANY.TOTAL_GRID });
  insertNewsHeadlineData(rollingRandomDataLeft, ".data_list_left");
  insertNewsHeadlineData(rollingRandomDataRight, ".data_list_right");
  deliverGridData(gridRandomData, COMPANY.PAGES_PER);
  findData(gridData);
};

export const fetchData = async (url) => {
  return await fetch(url).then((res) => res.json());
};

//랜덤으로 번호를 뽑아낸다.
const makeRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

//랜덤 번호를 이용해서 확정된 랜덤 데이터를 return한다.
const fixedRandomData = ({ data, count }) => {
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
  reciveGridData(gridDataPage);
};

const findData = (newsData) => {
  const categoryData = new Set();
  const randomData = fixedRandomData({ data: newsData, count: newsData.length });

  Object.values(category).forEach((categoryList) => {
    categoryData[categoryList] = randomData.filter((data) => data.mediaInfo.type === categoryList);
  });
  reciveDetailData(categoryData);
};

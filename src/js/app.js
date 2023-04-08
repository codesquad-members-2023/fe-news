import header from './components/header/header.js';
import RollingBar from './components/rollingBar/rollingBar.js';
import { CONSTANTS, API_URL } from './core/constants.js';
import { getAllData } from './utils/fetch.js';
import systemTimeOption from './utils/systemTime.js';

const app = async() => {
  const root = document.querySelector("#root");

  root.append(header(CONSTANTS["NEWS_STAND"], systemTimeOption));
  // const [rollingData, mediaData] = await getAllData(API_URL['rolling'], API_URL['media']);
}

app();
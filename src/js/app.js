import { CONSTANTS, API_URL, autoAnimationInfo } from './core/constants.js';
import systemTimeOption from './utils/systemTime.js';
import header from './components/header/header.js';
import RollingBar from './components/section/rollingBar.js';
import gridView from './components/main/grid/grid.js';
import { getAllData } from './utils/fetch.js';

const app = async() => {
  const root = document.querySelector("#root");
  const headerEl = header(CONSTANTS["NEWS_STAND"], systemTimeOption);
  const rollingBarEl = new RollingBar(CONSTANTS["ROLLING_LINK_PRESS"], { autoAnimationInfo }, 'left', 'right').render();

  root.append(headerEl);
  root.append(rollingBarEl);
  // gridView();
  // const [rollingData, mediaData] = await getAllData(API_URL['rolling'], API_URL['media']);
}

app();
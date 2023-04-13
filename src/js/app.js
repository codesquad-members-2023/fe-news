import { CONSTANTS, rollingPosition, autoAnimationInfo } from './core/constants.js';
import systemTimeOption from './utils/systemTime.js';
import Header from './components/header.js';
import RollingBar from './components/rollingBar.js';
import mainView from './components/main/viewContainer/mainView.js';
import responseData from './utils/fetch.js'
import { RollingStore } from './stores/rollingStore.js';
import { ViewStore } from './stores/viewStore.js';

const app = async () => {
  const [rollingData, mediaData] = await responseData;
  const root = document.querySelector('#root');
  const header = Header(CONSTANTS['NEWS_STAND'], systemTimeOption);
  const section = new RollingBar(
    CONSTANTS['ROLLING_LINK_PRESS'],
    rollingData,
    rollingPosition,
    { autoAnimationInfo },
  ).render();
  // const main = mainView(mediaData);
  const main = mainView(mediaData);

  root.append(header, section, main);
};

app();

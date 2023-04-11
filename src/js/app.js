import { CONSTANTS, autoAnimationInfo } from './core/constants.js';
import systemTimeOption from './utils/systemTime.js';
import Header from './components/header/header.js';
import RollingBar from './components/section/rollingBar.js';
import main from './components/main/viewContainer/mainView.js';

const app = async () => {
  const root = document.querySelector('#root');
  const header = Header(CONSTANTS['NEWS_STAND'], systemTimeOption);
  const section = new RollingBar(
    CONSTANTS['ROLLING_LINK_PRESS'],
    { autoAnimationInfo },
    'left',
    'right',
  ).render();
  const mainView = main();

  root.append(header, section, mainView);
  // const [rollingData, mediaData] = await getAllData(API_URL['rolling'], API_URL['media']);
};

app();
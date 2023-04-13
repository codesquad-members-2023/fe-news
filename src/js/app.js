import { CONSTANTS, API_URL, autoAnimationInfo } from './core/constants.js';
import systemTimeOption from './utils/systemTime.js';
import Header from './components/header/header.js';
import RollingBar from './components/section/rollingBar.js';
import mainView from './components/main/viewContainer/mainView.js';
import fetchData from './utils/fetch.js';
import { DataStore } from './stores/dataStore.js';
import { RollingStore } from './stores/rollingStore.js'
import { ViewStore } from './stores/viewStore.js'

const app = async () => {
  /** 어떻게 비동기로 getData()를 할까..... */
  // const data = DataStore.subscribe(() => {
    // const rollingData = { ...DataStore.getState().rollingData };
    // const viewData = { ...DataStore.getState().mediaData.media };
    // RollingStore.dispatch('START_ROLLINGBAR', { rollingData });
    // ViewStore.dispatch('SET_GRIDVIEW', { viewData });
    // return { ...DataStore.getState() };
  // });
  // DataStore.dispatch('DELIVER_DATA', { ...data.rollingData });
  const responseData = await fetchData(API_URL['rolling'], API_URL['media']);
  const root = document.querySelector('#root');
  const header = Header(CONSTANTS['NEWS_STAND'], systemTimeOption);
  const section = new RollingBar(
    responseData[0],
    CONSTANTS['ROLLING_LINK_PRESS'],
    { autoAnimationInfo },
    'left',
    'right',
  ).render();
  const main = mainView();
  root.append(header, section, main);
};

app();

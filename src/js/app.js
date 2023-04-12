import { CONSTANTS, API_URL, autoAnimationInfo } from './core/constants.js';
import systemTimeOption from './utils/systemTime.js';
import Header from './components/header/header.js';
import RollingBar from './components/section/rollingBar.js';
import main from './components/main/viewContainer/mainView.js';
import fetchData from './utils/fetch.js';
import { DataStore } from './stores/dataStore.js';
import { RollingStore } from './stores/rollingStore.js'
import { ViewStore } from './stores/viewStore.js'

const app = async () => {
  const responseData = await fetchData(API_URL['rolling'], API_URL['media']);
  DataStore.dispatch('DELIVER_DATA', { responseData });
  DataStore.subscribe(() => {
    const rollingData = { ...DataStore.getState().rollingData };
    const viewData = { ...DataStore.getState().mediaData };
    // RollingStore.dispatch('START_ROLLINGBAR', { rollingData });
    // ViewStore.dispatch('SET_GRIDVIEW', { viewData });

    const root = document.querySelector('#root');
    const header = Header(CONSTANTS['NEWS_STAND'], systemTimeOption);
    const section = new RollingBar(
      rollingData,
      CONSTANTS['ROLLING_LINK_PRESS'],
      { autoAnimationInfo },
      'left',
      'right',
    ).render();
    const mainView = main();
    root.append(header, section, mainView);
  });
};

app();

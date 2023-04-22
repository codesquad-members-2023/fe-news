import { createHeader } from './components/header.js'
import { newsHeaderInfo, rollingBarInfo } from './core/constants.js';
import RollingBar from './components/rollingBar.js';
import mainView from './components/main/newsMainView.js';
import fetchData from './utils/fetch.js';

const app = async () => {
  const [rollingData, mediaData] = await fetchData;
  const root = document.querySelector('#root');
  const newsHeader = createHeader(newsHeaderInfo);
  const rollingBar = new RollingBar(rollingBarInfo).init(rollingData).getAutoRollingBar();
  const mainViewContainer = mainView(mediaData);

  root.append(newsHeader, rollingBar, mainViewContainer);
};

app();
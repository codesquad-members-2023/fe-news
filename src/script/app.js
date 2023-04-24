import fetchData from './utils/dataFetcher.js';
import Header from './components/header.js';
import Rolling from './components/rolling.js';
import Main from './components/main/main.js';

const app = async () => {
  const root = document.querySelector('#NEWSSTAND');
  const header = Header();

  const [rollingData, mainData] = await fetchData(['auto', 'media']);
  const rolling = new Rolling(rollingData).render();
  const main = Main();

  root.append(header, rolling, main);
};

app();

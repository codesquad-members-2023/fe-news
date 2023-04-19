import fetchData from './utils/dataFetcher.js';
import createHeader from './components/header/header.js';
import Headline from './components/headline/headline.js';
import Main from './components/main/main.js';

const App = async () => {
  const root = document.querySelector('#NEWSSTAND');

  const [headlineData, mainData] = await fetchData(['headline', 'media']);

  const header = createHeader();
  const headline = new Headline(headlineData).render();
  const main = new Main(mainData).render();

  root.append(header, headline, main);
};

App();

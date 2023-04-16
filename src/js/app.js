import { viewHeader } from './components/header/header.js';
import { Headline } from './components/headline/headline.js';
import { headLineData, mediaData } from './api/fetchData.js';
import { Main } from './components/main/main.js';

const App = () => {
  const root = document.querySelector('#NEWSSTAND');

  const header = viewHeader();

  const headline = new Headline(headLineData);
  const main = new Main(mediaData);

  root.append(header, headline.render(), main.render());
};

App();

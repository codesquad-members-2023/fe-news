import { $ } from './utils/dom.js';
import Header from './components/header/index.js';
import Nav from './components/nav/index.js';
import MainContent from './components/mainContent/index.js';

const app = async ($targetEle) => {
  const header = new Header($targetEle);
  const nav = new Nav($targetEle);
  const mainContent = new MainContent($targetEle);

  header.mount();
  await nav.mount();
  mainContent.mount();
};

app($({ selector: '#app' }));

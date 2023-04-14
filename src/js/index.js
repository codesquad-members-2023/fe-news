import { $ } from './utils/dom.js';
import { getData } from './utils/getData.js';
import Header from './components/header/index.js';
import Nav from './components/nav/index.js';
import MainContent from './components/mainContent/index.js';

const app = async ($targetEle) => {
  const { leftNavBarHeadLines, rightNavBarHeadLines } = await getData('http://localhost:3001/navBarData');
  const pressData = await getData('http://localhost:3001/mainContentData');

  const header = new Header($targetEle);
  const nav = new Nav($targetEle, { leftNavBarHeadLines, rightNavBarHeadLines });
  const mainContent = new MainContent($targetEle, { pressData });

  header.mount();
  nav.mount();
  mainContent.mount();
};

app($({ selector: '#app' }));

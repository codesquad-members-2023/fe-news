import { domUtils, dataUtils } from './utils/index.js';
import Header from './components/header/index.js';
import Nav from './components/nav/index.js';
import MainContent from './components/mainContent/index.js';

const app = async ($targetEle) => {
  const { getData } = dataUtils;
  const { leftNavBarHeadLines, rightNavBarHeadLines } = await getData('http://localhost:3001/navBarData');
  const pressData = await getData('http://localhost:3001/mainContentData');

  const header = new Header($targetEle);
  const nav = new Nav($targetEle, { leftNavBarHeadLines, rightNavBarHeadLines });
  const mainContent = new MainContent($targetEle, { pressData });

  header.render();
  nav.render();
  mainContent.render();
};

const { $ } = domUtils;

app($({ selector: '#app' }));

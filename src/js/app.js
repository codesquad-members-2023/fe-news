import Header from './components/header.js';
import MainContent from './components/mainContent/mainContent.js';

const app = ($targetEle) => {
  const header = new Header($targetEle);
  const mainContent = new MainContent($targetEle);

  header.initRender();
  mainContent.initRender();
};

export default app;

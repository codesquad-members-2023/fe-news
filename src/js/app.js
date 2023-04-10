import Header from './components/header/index.js';
import MainContent from './components/mainContent/index.js';

const app = ($targetEle) => {
  const header = new Header($targetEle);
  const mainContent = new MainContent($targetEle);

  header.initRender();
  mainContent.initRender();
};

export default app;

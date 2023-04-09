import { Header } from './pages/header.js';
// import AutoRolling from './pages/autoRolling.js';
// import Grid from './pages/grid.js';

const App = () => {
  const root = document.querySelector('#root');
  
  const header = new Header();
  const newElement1 = header.viewRender();

  root.append(newElement1);
};

App();

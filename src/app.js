import { Header } from './pages/header.js';
import {AutoRolling} from './pages/autoRolling.js';
// import Grid from './pages/grid.js';

const App = () => {
  const root = document.querySelector('#root');

  const header = new Header();
  const headerElement = header.viewRender();
  const autoRolling = new AutoRolling();
  const rollingElement = autoRolling.viewRender();

  root.append(headerElement, rollingElement);
};

App();

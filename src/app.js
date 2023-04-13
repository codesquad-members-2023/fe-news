import { Header } from './pages/header.js';
import { AutoRolling } from './pages/autoRolling.js';
import { fetchData } from './data/fetchData.js';

const App = async () => {
  const root = document.querySelector('#root');

  const header = new Header();
  const headerElement = header.viewRender();

  const rollingData = await fetchData('http://localhost:3001/auto');
  const autoRolling = new AutoRolling(rollingData);
  const rollingElement = autoRolling.viewRender();

  root.append(headerElement, rollingElement);
};

App();

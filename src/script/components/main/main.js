import { MainHeader } from './header.js';
import { Grid } from './grid.js';
import { List } from './list.js';
import { getRandomData } from '../../utils/randomData.js';

export const Main = (mainData) => {
  const main = document.createElement('div');
  main.classList.add('newsstand_main');

  const header = new MainHeader(mainData).render();

  const mainView = document.createElement('div');
  mainView.classList.add('main_view');

  const gridData = getRandomData(mainData.data, 24); 

  const grid = new Grid(gridData).render();
  const list = new List(mainData).render();

  mainView.append(grid, list);
  main.append(header, mainView);

  return main;
};

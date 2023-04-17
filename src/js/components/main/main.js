import createEl from "../../utils/util.js";
import randomData from '../../utils/randomData.js';
import { TOTAL_GRID_COUNT } from '../../core/constants.js';
import sortButton from './sortButton.js'
import GridView from './grid.js';
import ListView from './list.js';

const mainView = ({ media }) => {
  const gridData = randomData(media, TOTAL_GRID_COUNT);

  const main = createEl("main");
  const sortButtons = new sortButton().render();
  const viewContainer = new GridView(gridData).render();
  // const ListView = new ListView(media).render();
  main.append(sortButtons, viewContainer);
  return main;
}

export default mainView;
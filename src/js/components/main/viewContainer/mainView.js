import createEl from "../../../utils/util.js";
import randomData from '../../../utils/randomData.js';
import { CONSTANTS, TOTAL_GRID_COUNT } from '../../../core/constants.js';
import sortButton from '../buttons/sortButton.js'
import GridView from './grid/grid.js';

const mainView = ({ media }) => {
  const gridData = randomData(media, TOTAL_GRID_COUNT);

  const main = createEl("main");
  const sortButtons = sortButton(CONSTANTS['ALL_PRESS'], CONSTANTS['SUBSCRIBED_PRESS']);
  const viewContainer = new GridView(gridData).render();

  main.append(sortButtons, viewContainer);
  return main;
}

export default mainView;
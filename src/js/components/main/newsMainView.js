import createEl from "../../utils/util.js";
import randomData from '../../utils/randomData.js';
import { TOTAL_GRID_COUNT, GRID_INFO } from '../../core/constants.js';
import SortButton from './sortButton.js'
import GridView from './newsGridView.js';
import ListView from './newsListView.js';

const mainView = ({ media }) => {
  const gridData = randomData(media, TOTAL_GRID_COUNT);
  const mainView = createEl("main");
  const sortButtons = new SortButton().init().getSortButtons();
  const viewContainer = new GridView(gridData, { GRID_INFO }).init().getViewContainer();
  const list = new ListView(media).init().getListView();
  viewContainer.append(list);
  mainView.append(sortButtons, viewContainer);
  return mainView;
}

export default mainView;
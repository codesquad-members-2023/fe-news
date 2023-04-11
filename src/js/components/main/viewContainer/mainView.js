import createEl from "../../../utils/util.js";
import { CONSTANTS } from '../../../core/constants.js';
import sortButton from '../buttons/sortButton.js'
import gridView from "./grid/grid.js";

const main = () => {
  const main = createEl("main");
  const sortButtons = sortButton(
    CONSTANTS['ALL_PRESS'],
    CONSTANTS['SUBSCRIBED_PRESS'],
  );
  const viewContainer = createEl('div', 'view-container');
  const moveToPageButton = `<a class="prev-button"></a>
    <a class="next-button"></a>`;
  const grid = gridView();

  viewContainer.insertAdjacentHTML('beforeend', moveToPageButton);
  viewContainer.insertAdjacentElement('afterbegin', grid);

  const prev = viewContainer.querySelector('.prev-button');
  const next = viewContainer.querySelector('.next-button');

  main.append(sortButtons);
  main.append(viewContainer);
  return main;
}

export default main;
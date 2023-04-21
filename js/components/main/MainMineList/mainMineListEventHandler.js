import { dispatch } from '../../../store/store.js';
import { displayActionCreator } from '../../../actions/ActionCreator.js';

export const mineListHeaderEventHandler = (
  subscribeNameArr,
  { target, currentTarget },
) => {
  const clickedMediaName = target.textContent.trim();
  const targetIndex = subscribeNameArr.indexOf(clickedMediaName);
  if (targetIndex === -1) return;

  const $navItems = currentTarget.firstElementChild;

  dispatch(displayActionCreator.mineListTabBtnClick(targetIndex));
};

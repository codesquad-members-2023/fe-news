import { dispatch } from '../../../store/store.js';
import { displayActionCreator } from '../../../actions/ActionCreator.js';
import { unsubscribeBtnClickHandler } from '../MainAllLIst/mainAllListEventHandlers.js';

export const mineListHeaderEventHandler = (subscribeNameArr, { target }) => {
  const clickedMediaName = target.textContent.trim();
  const targetIndex = subscribeNameArr.indexOf(clickedMediaName);
  if (targetIndex === -1) return;

  dispatch(displayActionCreator.mineListTabBtnClick(targetIndex));
};

export const mineListUnsubscribeBtnEventHandler = (mediaId) => {
  dispatch(displayActionCreator.progressBarAnimationPause());
  unsubscribeBtnClickHandler(mediaId);
};

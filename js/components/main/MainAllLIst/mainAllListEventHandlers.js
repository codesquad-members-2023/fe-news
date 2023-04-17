import { dispatch } from '../../../store/store.js';
import { displayActionCreator } from '../../../actions/actions.js';
import { MEDIA_CATEGORIES } from './mainAllList.js';

export const tabClickEventHandler = ({ target }) => {
  const $tab = target.closest('.main-list__nav-item');
  if (!$tab || $tab.classList.contains('current-category')) return;
  const mediaType = $tab.textContent.trim();
  const categoryIdx = MEDIA_CATEGORIES.indexOf(mediaType);
  dispatch(displayActionCreator.listTabBtnClick(categoryIdx));
};

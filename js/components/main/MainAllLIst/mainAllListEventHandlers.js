import { dispatch } from '../../../store/store.js';
import { displayActionCreator } from '../../../actions/ActionCreator.js';
import { MEDIA_CATEGORIES } from './mainAllList.js';

export const tabClickEventHandler = ({ target }) => {
  const $tab = target.closest('.main-list__nav-item');
  if (!$tab || $tab.classList.contains('current-category')) return;
  const mediaType = $tab.textContent.trim();
  const categoryIdx = MEDIA_CATEGORIES.indexOf(mediaType);
  dispatch(displayActionCreator.listTabBtnClick(categoryIdx));
};

export const subscribeBtnClickEventHandler = (mediaId, event) => {
  const $img = event.currentTarget.querySelector('img');

  if ($img.alt === 'subscribe') {
    $img.alt = 'unsubscribe';
    $img.src = './asset/listUnsubscribeBtn.svg';
    const $mainHeader = document.querySelector('.main-header__media');
    $mainHeader.firstElementChild.classList.remove('bold');
    $mainHeader.lastElementChild.classList.add('bold');
    dispatch(displayActionCreator.gridSubscribeBtnClick(mediaId));
  } else {
    $img.alt = 'subscribe';
    $img.src = './asset/subscribeButton.svg';
    dispatch(displayActionCreator.gridUnsubscribeBtnClick(mediaId));
  }
};

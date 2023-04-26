import { dispatch, getStoreState } from '../../../store/store.js';
import { displayActionCreator } from '../../../actions/ActionCreator.js';
import { MEDIA_CATEGORIES } from './mainAllList.js';
import { createElement } from '../../../utils/dom.js';
import { createAlertElement } from '../MainAllGrid/mainAllGridEventHandlers.js';
import { animationStart } from '../progressBarAnimation.js';

export const tabClickEventHandler = ({ target }) => {
  const $tab = target.closest('.main-list__nav-item');
  if (!$tab || $tab.classList.contains('current-category')) return;
  const mediaType = $tab.textContent.trim();
  const categoryIdx = MEDIA_CATEGORIES.indexOf(mediaType);
  dispatch(displayActionCreator.listTabBtnClick(categoryIdx));
};

export const subscribeBtnClickEventHandler = (mediaId, event) => {
  const $img = event.currentTarget.querySelector('img');
  dispatch(displayActionCreator.progressBarAnimationPause());
  if ($img.alt === 'subscribe') {
    subscribeSnackBarCreate(mediaId);
  } else {
    unsubscribeBtnClickHandler(mediaId);
  }
};

const subscribeSnackBarCreate = (mediaName) => {
  const $mainList = document.querySelector('.main-list');
  document.querySelector('#root').classList.add('clicked');
  const $snakBar = createElement('div', {
    id: 'snack-bar',
    style: 'top: 187px',
  });
  $snakBar.textContent = '내가 구독한 언론사에 추가되었습니다.';
  $mainList.append($snakBar);
  requestAnimationFrame(snackBarEvent.bind(null, null, mediaName, $mainList));
};

const snackBarEvent = (startTime, mediaName, $mainList, timestamp) => {
  if (startTime === null) startTime = timestamp;
  const duration = timestamp - startTime;

  if (duration >= 2000) {
    document.querySelector('#root').classList.remove('clicked');
    $mainList.removeChild($mainList.lastElementChild);

    const $mainHeader = document.querySelector('.main-header__media');
    $mainHeader.firstElementChild.classList.remove('bold');
    $mainHeader.lastElementChild.classList.add('bold');
    const $listBtn = document.querySelector('.list-icon');
    const $gridBtn = document.querySelector('.grid-icon');
    $listBtn.classList.add('list-icon__enable');
    $gridBtn.classList.remove('grid-icon__enable');
    dispatch(displayActionCreator.gridSubscribeBtnClick(mediaName));
    dispatch(displayActionCreator.progressBarAnimationResume());
  } else {
    requestAnimationFrame(
      snackBarEvent.bind(null, startTime, mediaName, $mainList),
    );
  }
};

export const unsubscribeBtnClickHandler = (mediaId) => {
  // TODO : modal창도 띄워야함.....
  // DOM조작 : 해지하기 버튼 -> 구독하기 버튼.
  const $mainList = document.querySelector('.main-list');
  const mediaData = getStoreState('mediaData').data;
  let mediaName = '';
  document.querySelector('#root').classList.add('clicked');

  mediaData.some((media) => {
    if (media['mediaId'] === Number(mediaId)) {
      mediaName = media.mediaInfo.name;
      return true;
    }
  });

  $mainList.append(createAlertElement(mediaName));
  // 구독 List에서 Pop -> how?
  // TODO : 애니메이션 중지!

  $mainList.addEventListener(
    'click',
    modalClickEventHandler.bind(null, mediaId),
  );
};

const modalClickEventHandler = (mediaId, { target }) => {
  const $mainList = document.querySelector('.main-list');
  if (!$mainList) return;
  if (target.closest('.alert-unsubscribe')) {
    if ($mainList.querySelector('#alert') === null) return;
    $mainList.removeChild($mainList.querySelector('#alert'));
    document.querySelector('#root').removeAttribute('class');
    dispatch(displayActionCreator.progressBarAnimationResume());
    animationStart(document.querySelector('#current-category'));
    const $button = document.querySelector('.list__subscribe-button img');
    if (!$button) return;
    $button.alt = 'subscribe';
    $button.src = './asset/subscribeButton.svg';
    dispatch(displayActionCreator.gridUnsubscribeBtnClick(mediaId));
  } else if (target.closest('.alert-cancel')) {
    if ($mainList.querySelector('#alert') === null) return;
    dispatch(displayActionCreator.progressBarAnimationResume());
    animationStart(document.querySelector('#current-category'));
    $mainList.removeChild($mainList.querySelector('#alert'));
    document.querySelector('#root').removeAttribute('class');
  }
};

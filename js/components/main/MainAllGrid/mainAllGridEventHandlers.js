import { displayActionCreator } from '../../../actions/ActionCreator.js';
import { dispatch, getStoreState } from '../../../store/store.js';
import { createElement } from '../../../utils/dom.js';

const SUBSCRIBE = 'subscribe';
const UNSUBSCRIBE = 'unsubscribe';

export const mouseEventHandler = ({ type, target }) => {
  const $targetBox = target.closest('.main-grid__box');
  if ($targetBox === null) return;
  if (type === 'mouseover') mouseOverHandler($targetBox);
  if (type === 'mouseout') mouseOutHandler($targetBox);
};

export const cilckEventHandler = ({ target }) => {
  // 의문점... 왜 console.log(target) 찍으면 바뀐게 나오지?
  if (target.tagName !== 'IMG') return;
  // 1. 구독하기 이벤트 2. 해지하기 이벤트
  const mediaName = target
    .closest('.main-grid__box')
    .querySelector('.thumb img').alt;

  if (target.alt === SUBSCRIBE) subscribeBtnClickHandler(mediaName);
  else if (target.alt === UNSUBSCRIBE)
    unsubscribeBtnClickHandler(target, mediaName);
};

const subscribeBtnClickHandler = (mediaName) => {
  // 구독 List에 추가하기 -> how?
  subscribeSnackBarCreate(mediaName);
};

const unsubscribeBtnClickHandler = (target, mediaId) => {
  // TODO : modal창도 띄워야함.....
  // DOM조작 : 해지하기 버튼 -> 구독하기 버튼.
  const $mainGrid = document.querySelector('.main-grid');
  const mediaData = getStoreState('mediaData').data;
  let mediaName = '';
  document.querySelector('#root').classList.add('clicked');

  mediaData.some((media) => {
    if (media['mediaId'] === Number(mediaId)) {
      mediaName = media.mediaInfo.name;
      return true;
    }
  });

  $mainGrid.append(createAlertElement(mediaName));
  // 구독 List에서 Pop -> how?
  // TODO : 이 로직은 팝업 창 나오고 나서 실행시켜야함.
  $mainGrid.addEventListener(
    'click',
    modalClickEventHandler.bind(null, mediaId, target),
  );
};

const modalClickEventHandler = (mediaId, curTarget, { target }) => {
  const $mainGrid = document.querySelector('.main-grid');

  if (target.closest('.alert-unsubscribe')) {
    $mainGrid.removeChild($mainGrid.querySelector('#alert'));
    document.querySelector('#root').removeAttribute('class');
    curTarget.alt = 'subscribe';
    curTarget.src = './asset/subscribeButton.svg';
    dispatch(displayActionCreator.gridUnsubscribeBtnClick(mediaId));
  } else if (target.closest('.alert-cancel')) {
    if ($mainGrid.querySelector('#alert') === null) return;
    $mainGrid.removeChild($mainGrid.querySelector('#alert'));
    document.querySelector('#root').removeAttribute('class');
  }
};

const mouseOverHandler = ($targetBox) => {
  if ($targetBox.querySelector('img') === null) return;
  $targetBox.querySelector('.thumb').classList.add('none');
  $targetBox.querySelector('.popup-wrap').classList.remove('none');
};

const mouseOutHandler = ($targetBox) => {
  if ($targetBox.querySelector('img') === null) return;
  $targetBox.querySelector('.thumb').classList.remove('none');
  $targetBox.querySelector('.popup-wrap').classList.add('none');
};

const subscribeSnackBarCreate = (mediaName) => {
  const $mainGrid = document.querySelector('.main-grid');
  document.querySelector('#root').classList.add('clicked');
  const $snakBar = createElement('div', {
    id: 'snack-bar',
    style: 'top: 170px',
  });
  $snakBar.textContent = '내가 구독한 언론사에 추가되었습니다.';
  $mainGrid.append($snakBar);
  requestAnimationFrame(snackBarEvent.bind(null, null, mediaName, $mainGrid));
};

const snackBarEvent = (startTime, mediaName, $mainGrid, timestamp) => {
  if (startTime === null) startTime = timestamp;
  const duration = timestamp - startTime;

  if (duration >= 2000) {
    document.querySelector('#root').removeAttribute('class');
    $mainGrid.removeChild($mainGrid.lastElementChild);

    const $mainHeader = document.querySelector('.main-header__media');
    $mainHeader.firstElementChild.classList.remove('bold');
    $mainHeader.lastElementChild.classList.add('bold');
    const $listBtn = document.querySelector('.list-icon');
    const $gridBtn = document.querySelector('.grid-icon');
    $listBtn.classList.add('list-icon__enable');
    $gridBtn.classList.remove('grid-icon__enable');
    dispatch(displayActionCreator.gridSubscribeBtnClick(mediaName));
  } else {
    requestAnimationFrame(
      snackBarEvent.bind(null, startTime, mediaName, $mainGrid),
    );
  }
};

export const createAlertElement = (mediaName) => {
  const fragment = new DocumentFragment();
  const $alert = createElement('div', {
    id: 'alert',
  });
  $alert.innerHTML = `<div class="alert-text"><strong>${mediaName}</strong>을(를)<br />구독해지 하시겠습니까?</div>
  <div class="alert-buttons">
    <div class="alert-unsubscribe">
      <a href="#">예, 해지합니다</a>
    </div>
    <div class="alert-cancel">
      <a href="#">아니오</a>
    </div>
  </div>`;
  fragment.append($alert);
  return fragment;
};

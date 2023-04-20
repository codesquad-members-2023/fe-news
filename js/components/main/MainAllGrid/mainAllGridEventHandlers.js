import { displayActionCreator } from '../../../actions/actions.js';
import { dispatch } from '../../../store/store.js';

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

  if (target.alt === SUBSCRIBE) subscribeBtnClickHandler(target, mediaName);
  else if (target.alt === UNSUBSCRIBE)
    unsubscribeBtnClickHandler(target, mediaName);
};

const subscribeBtnClickHandler = (target, mediaName) => {
  // DOM조작 : 구독하기 버튼 -> 해지하기 버튼.
  target.alt = 'unsubscribe';
  target.src = './asset/unsubscribeButton.svg';
  // 구독 List에 추가하기 -> how?

  dispatch(displayActionCreator.gridSubscribeBtnClick(mediaName));
};

const unsubscribeBtnClickHandler = (target, mediaName) => {
  // TODO : modal창도 띄워야함.....
  // DOM조작 : 해지하기 버튼 -> 구독하기 버튼.
  target.alt = 'subscribe';
  target.src = './asset/subscribeButton.svg';

  // 구독 List에서 Pop -> how?
  // TODO : 이 로직은 팝업 창 나오고 나서 실행시켜야함.
  dispatch(displayActionCreator.gridUnsubscribeBtnClick(mediaName));
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

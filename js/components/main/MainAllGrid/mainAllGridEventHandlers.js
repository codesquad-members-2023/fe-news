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
  const mediaName = target.closest('.main-grid__box');
  if (target.alt === SUBSCRIBE) subscribeBtnClickHandler(target);
  else if (target.alt === UNSUBSCRIBE) unsubscribeBtnClickHandler(target);
};

const subscribeBtnClickHandler = (target) => {
  // DOM조작 : 구독하기 버튼 -> 해지하기 버튼.
  target.alt = 'unsubscribe';
  target.src = './asset/unsubscribeButton.svg';
  // 구독 List에 추가하기 -> how?
};

const unsubscribeBtnClickHandler = (target) => {
  // TODO : modal창도 띄워야함.....
  // DOM조작 : 해지하기 버튼 -> 구독하기 버튼.
  target.alt = 'subscribe';
  target.src = './asset/subscribeButton.svg';
  // 구독 List에서 Pop -> how?
};

const mouseOverHandler = ($targetBox) => {
  $targetBox.firstChild.classList.add('none');
  $targetBox.lastChild.classList.remove('none');
};

const mouseOutHandler = ($targetBox) => {
  $targetBox.firstChild.classList.remove('none');
  $targetBox.lastChild.classList.add('none');
};

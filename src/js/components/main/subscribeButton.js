import { PRESS_BUTTON } from '../../core/constants.js';

export const createBtn = (type) => {
  const buttonImg = type === 'subscribe' ? 'subscribe' : 'unsubscribe';
  const buttonText = type === 'close' ? `` : `<span>${PRESS_BUTTON[type]}</span>`;
  return `<button type="button" class="${type} cell-button">
  <img src="/src/assets/icons/${buttonImg}.svg">${buttonText}
  </button>`;
}

export const getUnsubscribePopup = (press) => {
  return `<div class="popup-confirm">
    <p><strong>${press}</strong>을(를)<br>구독해지 하시겠습니까?</p>
    <div class="popup-btn"><a class="confirm">확인</a><a class="cancle">취소</a></div>
  </div>`;
}

export const getSubscribePopup = () => {
  return `<div class="popup-add">내가 구독한 언론사에 추가되었습니다.</div>`;
}
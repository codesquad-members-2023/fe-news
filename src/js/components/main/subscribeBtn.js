import { PRESS_BUTTON } from '../../core/constants.js';

export const createBtn = (type) => {
  const buttonImg = type === 'subscribe' ? 'subscribe' : 'unsubscribe';
  const buttonText = type === 'close' ? `` : `<span>${PRESS_BUTTON[type]}</span>`;

  return `<button type="button" class="${type} press-button">
  <img src="/src/assets/icons/${buttonImg}.svg">${buttonText}
  </button>`;
}
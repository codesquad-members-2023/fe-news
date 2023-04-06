import { createElement } from '../../utils/dom.js';
const rollingRightAnimation = ($element, content) => {
  const $camera = $element.lastChild.querySelector('.auto__camera');

  // 1. 새로운 Panel을 생성한다.
  const $newPanel = createElement('div', {
    class: 'auto__panel',
    style: 'top: 16px',
  });
  // Todo : Store에서 데이터 받아와야함
  $newPanel.textContent = content.rightRollingData[1];

  // 2. Panel의 부모인 Camera에 inline Style을 부여한다. 애니메이션 적용!
  // 먼저 위에서 생성한 Panel을 붙인 뒤 animation을 준다.
  $camera.appendChild($newPanel);
  $camera.style.transition = 'transform 0.8s';
  $camera.style.transform = 'translate3d(0px, -16px, 0px)';

  // 3. 애니메이션이 끝나면 camera의 style을 제거하고 newPanel의 top 값을 없애준다.
  $camera.ontransitionend = (e) => {
    e.target.removeAttribute('style');
    e.target.lastChild.removeAttribute('style');
    e.target.removeChild(e.target.children[0]);
  };
};

export const autoRollingFrame = (obj, timestamp) => {
  let startTime = obj.startTime;
  if (obj.startTime === null) obj.startTime = timestamp;
  const now = timestamp;
  const duration = now - startTime;
  if (duration >= 3000) {
    rollingRightAnimation(obj.element, obj.content);
    obj.startTime = now;
  }
  window.requestAnimationFrame(autoRollingFrame.bind(null, obj));
};

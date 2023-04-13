import { createElement } from '../../utils/dom.js';

const LEFT_ANIMATION_TIME = 4000;
const RIGHT_ANIMATION_TIME = 2000;

// animation 이렇게 뺀 것 Good!! from.. Crong..
const rollingRightAnimation = ($element, content, idx) => {
  const $camera = $element.lastChild.querySelector('.auto__camera');

  // 1. 새로운 Panel을 생성한다.
  const $newPanel = createElement('div', {
    class: 'auto__panel',
    style: 'top: 16px',
  });
  // Todo : Store에서 데이터 받아와야함
  // TODO : Magic Number 제거.
  $newPanel.textContent = content.rightRollingData[idx % 15];

  // 2. Panel의 부모인 Camera에 inline Style을 부여한다. 애니메이션 적용!
  // 먼저 위에서 생성한 Panel을 붙인 뒤 animation을 준다.
  $camera.appendChild($newPanel);
  $camera.style.transition = 'transform 0.5s';
  $camera.style.transform = 'translate3d(0px, -16px, 0px)';

  // 3. 애니메이션이 끝나면 camera의 style을 제거하고 newPanel의 top 값을 없애준다.
  $camera.ontransitionend = ({ target }) => {
    target.removeAttribute('style');
    target.lastChild.removeAttribute('style');
    target.removeChild(target.querySelector('.auto__panel'));
  };
};

const rollingLeftAnimation = ($element, content, idx) => {
  const $camera = $element.firstChild.querySelector('.auto__camera');

  // 1. 새로운 Panel을 생성한다.
  const $newPanel = createElement('div', {
    class: 'auto__panel',
    style: 'top: 16px',
  });
  // Todo : Store에서 데이터 받아와야함
  // TODO : Magic Number 제거.
  $newPanel.textContent = content.leftRollingData[idx % 15];

  // 2. Panel의 부모인 Camera에 inline Style을 부여한다. 애니메이션 적용!
  // 먼저 위에서 생성한 Panel을 붙인 뒤 animation을 준다.
  $camera.appendChild($newPanel);
  $camera.style.transition = 'transform 0.5s';
  $camera.style.transform = 'translate3d(0px, -16px, 0px)';

  // 3. 애니메이션이 끝나면 camera의 style을 제거하고 newPanel의 top 값을 없애준다.
  $camera.ontransitionend = ({ target }) => {
    target.removeAttribute('style');
    target.lastChild.removeAttribute('style');
    target.removeChild(target.querySelector('.auto__panel'));
  };
};

export const autoRollingFrame = (obj, timestamp) => {
  if (obj.leftTime === null) {
    obj.leftTime = timestamp;
    // obj.rightTime = obj.leftTime;
  }

  const now = timestamp;
  const leftDuration = now - obj.leftTime;
  const rightDuration = obj.rightTime === null ? 0 : now - obj.rightTime;

  // TODO : Magic Number 제거.
  if (leftDuration >= LEFT_ANIMATION_TIME) {
    obj.leftIdx++;
    rollingLeftAnimation(obj.element, obj.content, obj.leftIdx);
    obj.leftTime = now;
    obj.rightTime = now;
  }

  if (rightDuration >= RIGHT_ANIMATION_TIME) {
    obj.rightIdx++;
    rollingRightAnimation(obj.element, obj.content, obj.rightIdx);
    obj.rightTime = null;
  }
  window.requestAnimationFrame(autoRollingFrame.bind(null, obj));
};

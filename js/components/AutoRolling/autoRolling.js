import { createElement } from '../../utils/dom.js';
import { subscribe } from '../../store/store.js';
import { fetchActionCreator } from '../../actions/actions.js';
import { autoRollingFrame } from './autoRollingAnimaiton.js';
// 전역변수 한번에 관리해야지.... 빼기 너무 귀찮고..
const MEDIA_NAME = '연합뉴스';

const createAutoRollingElement = () => {
  const $element = createElement('section', {
    id: 'auto-rolling',
  });
  const $autoBox = createAutoRollingBox(MEDIA_NAME);

  $element.append($autoBox, $autoBox.cloneNode(true));
  return $element;
};

const createAutoRollingBox = (MEDIA_NAME) => {
  const $autoBox = createElement('div', {
    class: 'auto__box',
  });
  const $mediaName = createElement('div', {
    class: 'auto__media',
  });
  $mediaName.innerHTML = MEDIA_NAME;

  const $autoViewPort = createElement('div', {
    class: 'auto__viewport',
  });
  $autoViewPort.innerHTML = createRollingArea();

  $autoBox.append($mediaName, $autoViewPort);
  return $autoBox;
};

const createRollingArea = () => {
  const $autoViewPortChild = `
    <div class="auto__camera">
      <div class="auto__panel"></div>
    </div>
  `;
  return $autoViewPortChild;
};

const updateRollingContent = ($element, content) => {
  // 원래 if(!content.loading){} 이렇게 되어있었는데 if(content.loading) return;으로 변경.
  if (content.loading) return;

  const $rolling = $element;

  const $leftRolling = $rolling.firstChild.querySelector('.auto__panel');
  $leftRolling.textContent = content.leftRollingData[0];

  const $rightRolling = $rolling.lastChild.querySelector('.auto__panel');
  $rightRolling.textContent = content.rightRollingData[0];

  const obj = {
    leftTime: null,
    rightTime: null,
    element: $element,
    content: content,
    leftIdx: 1,
    rightIdx: 1,
  };

  window.requestAnimationFrame(autoRollingFrame.bind(null, obj));
  // animation 코드. 다른곳으로 옮겨야함.
};

const AutoRolling = () => {
  const $element = createAutoRollingElement();
  subscribe('autoData', updateRollingContent.bind(null, $element));
  fetchActionCreator.fetchAutoData();

  return $element;
};

export default AutoRolling;

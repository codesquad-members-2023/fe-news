import { createElement } from '../../utils/dom.js';
import { subscribe } from '../../store/store.js';
import { fetchActionCreator } from '../../actions/actions.js';
import { autoRollingFrame } from './autoRollingAnimaiton.js';

const createAutoRollingElement = () => {
  const $element = createElement('section', {
    id: 'auto-rolling',
  });
  const $autoBox = createAutoRollingBox();

  $element.append($autoBox, $autoBox.cloneNode(true));
  return $element;
};

const createAutoRollingBox = () => {
  const $autoBox = createElement('div', {
    class: 'auto__box',
  });
  const $mediaName = createElement('div', {
    class: 'auto__media',
  });
  $mediaName.innerHTML = '연합뉴스';

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
  if (!content.loading) {
    const $rolling = $element;

    const $leftRollingElement =
      $rolling.firstChild.querySelector('.auto__panel');
    $leftRollingElement.textContent = content.leftRollingData[0];

    const $rightRollingElement =
      $rolling.lastChild.querySelector('.auto__panel');
    $rightRollingElement.textContent = content.rightRollingData[0];

    const obj = {
      startTime: null,
      element: $element,
      content: content,
    };
    window.requestAnimationFrame(autoRollingFrame.bind(null, obj));
    // animation 코드. 다른곳으로 옮겨야함.
  }
};

const AutoRolling = () => {
  const $element = createAutoRollingElement();
  subscribe('autoData', updateRollingContent.bind(null, $element));
  fetchActionCreator.fetchAutoData();

  return $element;
};

export default AutoRolling;

import { createElement } from '../utils/dom.js';
import { subscribe } from '../store/store.js';
import { fetchActionCreator } from '../actions/Actions.js';

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
  const $mediaName = createElement('span', {
    class: 'auto__media',
  });
  $mediaName.innerHTML = '연합뉴스';
  const $content = createElement('span', {
    class: 'auto__content',
  });

  $autoBox.append($mediaName, $content);
  return $autoBox;
};

const updateRollingContent = ($element, content) => {
  if (!content.loading) {
    const $rolling = $element;
    const $leftRollingElement = $rolling.firstChild.lastChild;
    $leftRollingElement.innerHTML = content.data.leftRollingData[0];
    const $rightRollingElement = $rolling.lastChild.lastChild;
    $rightRollingElement.innerHTML = content.data.rightRollingData[0];
  }
};

const AutoRolling = () => {
  const $element = createAutoRollingElement();
  subscribe('autoData', updateRollingContent.bind(null, $element));
  fetchActionCreator.fetchAutoData();
  return $element;
};

export default AutoRolling;

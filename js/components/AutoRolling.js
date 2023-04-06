import { createElement } from '../utils/dom.js';

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
  const $content = createElement('span', {
    class: 'auto__content',
  });

  $autoBox.append($mediaName, $content);
  return $autoBox;
};

const AutoRolling = () => {
  const $element = createAutoRollingElement();

  return $element;
};

export default AutoRolling;

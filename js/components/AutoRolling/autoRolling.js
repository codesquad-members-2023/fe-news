import { createElement } from '../../utils/dom.js';
import { subscribe } from '../../store/store.js';
import { fetchActionCreator } from '../../actions/actions.js';

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

    // animation 코드. 다른곳으로 옮겨야함.
    $rolling.lastChild
      .querySelector('.auto__camera')
      .addEventListener('click', (e) => {
        const $child = createElement('div', {
          class: 'auto__panel',
          style: 'top: 16px',
        });
        $child.textContent = content.rightRollingData[1];
        e.currentTarget.appendChild($child);
        e.currentTarget.style.transition = 'transform 0.8s';
        e.currentTarget.style.transform = 'translate3d(0px, -16px, 0px)';
        const $lastChild = $rolling.lastChild.querySelector('.auto__camera');
        $lastChild.ontransitionend = (e) => {
          e.target.removeAttribute('style');
          e.target.lastChild.removeAttribute('style');
          e.target.removeChild(e.target.children[0]);
        };
      });
  }
};

const AutoRolling = () => {
  const $element = createAutoRollingElement();
  subscribe('autoData', updateRollingContent.bind(null, $element));
  fetchActionCreator.fetchAutoData();
  return $element;
};

export default AutoRolling;

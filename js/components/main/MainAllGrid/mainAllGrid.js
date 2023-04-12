import { subscribe } from '../../../store/store.js';
import { createElement } from '../../../utils/dom.js';
import { fetchActionCreator } from '../../../actions/actions.js';
import {
  mouseEventHandler,
  cilckEventHandler,
} from './mainAllGridEventHandlers.js';

const createMainGridElement = () => {
  const $mainGrid = createElement('section', {
    class: 'main-grid',
  });

  for (let page = 1; page <= 4; page++) {
    $mainGrid.append(createMainGridPage(page));
  }

  return $mainGrid;
};

const createMainGridPage = (page) => {
  const $mainGridPage = createElement('div', {
    class: page === 1 ? `main-grid__page grid` : 'main-grid__page none',
  });
  const $mainGridBox = createElement('div', {
    class: 'main-grid__box',
  });
  const $thumb = createElement('div', {
    class: 'thumb',
  });

  const $popupBox = createPopUpBox();

  $mainGridBox.append($thumb, $popupBox);

  for (let boxes = 0; boxes < 24; boxes++) {
    $mainGridPage.append($mainGridBox.cloneNode(true));
  }
  return $mainGridPage;
};

const createPopUpBox = () => {
  const $popupWrap = createElement('div', {
    class: 'popup-wrap none',
  });
  $popupWrap.innerHTML = `
  <a class = "subscribe-button">
    <img src="./asset/subscribeButton.svg" alt="subscribe" />
  </a>
    `;
  return $popupWrap;
};

const updateMediaContent = ($element, content) => {
  if (!content.loading) {
    const $gridBox = $element;
    const $thumbs = $gridBox.querySelectorAll('.thumb');

    $thumbs.forEach((item, index) => {
      const $image = createElement('img', {
        class: 'main-grid__logo',
        src: `${content.data[index].mediaInfo.imgSrc}`,
        alt: `${content.data[index].mediaId}`,
      });
      item.append($image);
    });
  }
};

const MainGrid = () => {
  const $grid = createMainGridElement();
  subscribe('mediaData', updateMediaContent.bind(null, $grid));
  fetchActionCreator.fetchMediaData();

  $grid.addEventListener('mouseover', mouseEventHandler);
  $grid.addEventListener('mouseout', mouseEventHandler);
  $grid.addEventListener('click', cilckEventHandler);
  return $grid;
};

export default MainGrid;

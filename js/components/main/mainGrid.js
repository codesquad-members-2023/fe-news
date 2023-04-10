import { subscribe } from '../../store/store.js';
import { createElement } from '../../utils/dom.js';
import { fetchActionCreator } from '../../actions/actions.js';

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
    class: `main-grid__${page}page`,
  });
  const $mainGridBox = createElement('div', {
    class: 'main-grid__box',
  });
  for (let i = 0; i < 24; i++) {
    $mainGridPage.append($mainGridBox.cloneNode(true));
  }
  return $mainGridPage;
};

const updateMediaContent = ($element, content) => {
  if (!content.loading) {
    const $gridBox = $element;
    const $boxes = $gridBox.querySelectorAll('.main-grid__box');

    $boxes.forEach((item, index) => {
      const $image = createElement('img', {
        class: 'main-grid__logo',
        src: `${content.data[index].mediaInfo.imgSrc}`,
        alt: `${content.data[index].mediaInfo.name}`,
      });
      item.append($image);
    });
  }
};

const MainGrid = () => {
  const $grid = createMainGridElement();
  subscribe('mediaData', updateMediaContent.bind(null, $grid));
  fetchActionCreator.fetchMediaData();
  return $grid;
};

export default MainGrid;

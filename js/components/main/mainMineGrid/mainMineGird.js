import { subscribe, getStoreState } from '../../../store/store.js';
import {
  mouseEventHandler,
  cilckEventHandler,
} from '../MainAllGrid/mainAllGridEventHandlers.js';
import { createElement } from '../../../utils/dom.js';

const createMainGridElement = (items) => {
  if (items.length === 0) {
    const $empty = createElement('section', {
      class: 'empty',
    });
    $empty.innerHTML = `
    <div class="empty-box">
    <strong class="error_msg">구독한 언론사가 없습니다.</strong>
    <p class="dsc_msg">
      언론사 구독 설정에서 관심있는 언론사를 구독하시면<br />언론사가 직접
      편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.
    </p>
  </div>`;
    return $empty;
  } else {
    const pageNum = Math.ceil(items.length / 24);
    const $mainGrid = createElement('section', {
      class: 'main-grid',
    });
    for (let page = 0; page < pageNum; page++) {
      const $mainGridPage = createElement('div', {
        class: page === 0 ? `main-grid__page grid` : 'main-grid__page none',
      });
      const curItemArr = items.slice(page * 24, (page + 1) * 24);
      $mainGridPage.innerHTML = createGridPage(curItemArr);
      $mainGrid.append($mainGridPage);
    }
    return $mainGrid;
  }
};

const createGridPage = (curItemArr) => {
  const blankLength = 24 - curItemArr.length;
  let gridPageHTML = curItemArr.reduce((acc, cur) => {
    cur = `
    <div class="main-grid__box">
      <div class="thumb">
        <img
          class="main-grid__logo"
          src="${cur.mediaInfo.imgSrc}"
          alt="${cur.mediaId}"
        />
      </div>
      <div class="popup-wrap none">
        <a class="subscribe-button">
          <img src="./asset/unsubscribeButton.svg" alt="unsubscribe" />
        </a>
      </div>
    </div>
    `;
    acc += cur;
    return acc;
  }, ``);
  for (let i = 0; i < blankLength; i++) {
    gridPageHTML += `<div class="main-grid__box"></div>`;
  }
  return gridPageHTML;
};

const render = ($main, content) => {
  const breakCondition =
    content.viewOption.gridOrList === 'grid' &&
    content.viewOption.allOrMine === 'mine';

  if (!breakCondition) return;

  const subscribeData = getStoreState('subscribeData').subscribe;
  const $grid = createMainGridElement(subscribeData);

  $grid.addEventListener('mouseover', mouseEventHandler);
  $grid.addEventListener('mouseout', mouseEventHandler);
  $grid.addEventListener('click', cilckEventHandler);

  $main.replaceChild($grid, $main.lastChild);
};

export const MineGrid = ($main) => {
  subscribe('subscribeData', () => {
    const viewOptionData = getStoreState('viewOptionData');
    render($main, viewOptionData);
  });

  subscribe('viewOptionData', render.bind(null, $main));
};

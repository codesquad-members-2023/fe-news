import { createElement } from '../../../utils/dom.js';
import { subscribe, getStoreState, dispatch } from '../../../store/store.js';
import { createMainListNewsElement } from '../MainAllLIst/mainAllList.js';
import {
  mineListHeaderEventHandler,
  mineListUnsubscribeBtnEventHandler,
} from './mainMineListEventHandler.js';
import { animationStart } from '../progressBarAnimation.js';
import { displayActionCreator } from '../../../actions/ActionCreator.js';

const createMainListElement = (subscribeData, index) => {
  if (subscribeData.length === 0) {
    document.querySelector('.left-button').classList.add('none');
    document.querySelector('.right-button').classList.add('none');
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
    document.querySelector('.left-button').classList.remove('none');
    document.querySelector('.right-button').classList.remove('none');
    const $mainList = createElement('section', {
      class: 'main-list',
    });
    const $mainNav = createListNavElement(subscribeData, index);
    const $mainContent = createMainListNewsElement(subscribeData[index]);
    $mainList.append($mainNav, $mainContent);
    return $mainList;
  }
};

const createListNavElement = (subscribeData, targetIndex) => {
  const $mainListNav = createElement('nav', {
    class: 'main-list__nav',
  });
  const $navItems = createElement('ul', {
    class: 'main-list__nav-items',
  });

  $navItems.innerHTML = subscribeData.reduce((html, data, idx) => {
    html += navItemHTML(data, idx, targetIndex);
    return html;
  }, ``);
  $mainListNav.append($navItems);

  return $mainListNav;
};

const navItemHTML = (data, idx, targetIndex) => `
<li class="mine-list__nav-item" id="${
  idx === targetIndex ? 'current-category' : ''
}" >
      <a href="#">
      ${data.mediaInfo.name}
      </a>
  </li>`;

const render = ($main, index, content) => {
  const breakCondition =
    content.viewOption.gridOrList === 'list' &&
    content.viewOption.allOrMine === 'mine';

  if (!breakCondition) return;
  dispatch(displayActionCreator.progressBarAnimationEnd());

  const subscribeData = getStoreState('subscribeData').subscribe;

  const $list = createMainListElement(subscribeData, index);
  $main.replaceChild($list, $main.lastChild);

  if (subscribeData.length === 0) return;

  const subscribeNameArr = subscribeData.map((data) => data.mediaInfo.name);

  $list.firstElementChild.addEventListener(
    'click',
    mineListHeaderEventHandler.bind(null, subscribeNameArr),
  );

  $list
    .querySelector('.list__subscribe-button')
    .addEventListener(
      'click',
      mineListUnsubscribeBtnEventHandler.bind(
        null,
        subscribeData[index].mediaId,
      ),
    );

  scrollMove();
  animationStart($main.querySelector('#current-category'));
};

const scrollMove = () => {
  const currentCategory = document.querySelector('#current-category');

  // current-category가 있는 li 요소의 위치를 계산하여 스크롤 이동
  if (currentCategory) {
    const navItems = document.querySelector('.main-list__nav');
    const navItemWidth = navItems.offsetWidth;
    const currentItemWidth = currentCategory.offsetWidth;
    const currentItemLeft = currentCategory.offsetLeft;

    // 스크롤 이동할 위치 계산
    const scrollLeft = currentItemLeft - (navItemWidth - currentItemWidth);

    // 스크롤 이동
    navItems.scrollLeft = scrollLeft;
  }
};

export const MineList = ($main) => {
  subscribe('subscribeData', (content) => {
    // 해지하면 바로 다음 위치의 언론사를 렌더링해야함
    const viewOptionData = getStoreState('viewOptionData');
    render($main, content.mineListCurPage, viewOptionData);
  });

  // ViewOption이 바뀌면 첫번째 페이지를 렌더링 해야함.
  subscribe('viewOptionData', render.bind(null, $main, 0));
};

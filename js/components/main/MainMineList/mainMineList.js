import { createElement } from '../../../utils/dom.js';
import { subscribe, getStoreState } from '../../../store/store.js';
import { createMainListNewsElement } from '../MainAllLIst/mainAllList.js';

const createMainListElement = (subscribeData, index) => {
  if (subscribeData.length === 0) {
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
    const $mainList = createElement('section', {
      class: 'main-list',
    });
    const $mainNav = createListNavElement(subscribeData);
    const $mainContent = createMainListNewsElement(subscribeData[index]);
    $mainList.append($mainNav, $mainContent);
    return $mainList;
  }
};

const createListNavElement = (subscribeData) => {
  const $mainListNav = createElement('nav', {
    class: 'main-list__nav',
  });
  const $navItems = createElement('ul', {
    class: 'main-list__nav-items',
  });

  $navItems.innerHTML = subscribeData.reduce((html, data, idx) => {
    html += navItemHTML(data, idx);
    return html;
  }, ``);
  $mainListNav.append($navItems);

  return $mainListNav;
};

const navItemHTML = (data, idx) => `
<li class="mine-list__nav-item" id="${idx === 0 ? 'current-category' : ''}" >
      <a href="#">
      ${data.mediaInfo.name}
      </a>
  </li>`;

const render = ($main, index, content) => {
  const breakCondition =
    content.viewOption.gridOrList === 'list' &&
    content.viewOption.allOrMine === 'mine';

  if (!breakCondition) return;

  const subscribeData = getStoreState('subscribeData').subscribe;
  const $list = createMainListElement(subscribeData, index);

  $main.replaceChild($list, $main.lastChild);
};

export const MineList = ($main) => {
  subscribe('subscribeData', () => {
    // 해지하면 바로 다음 위치의 언론사를 렌더링해야함
    const viewOptionData = getStoreState('viewOptionData');
    render($main, 1, viewOptionData);
  });

  // ViewOption이 바뀌면 첫번째 페이지를 렌더링 해야함.
  subscribe('viewOptionData', render.bind(null, $main, 0));
};

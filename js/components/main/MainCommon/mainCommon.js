import { createElement } from '../../../utils/dom.js';
import {
  pageControlBtnClickEventHandler,
  headerViewChangeBtnClickEventHandler,
} from './mainButtonEventHandlers.js';
// TODO : 이벤트 등록 해야함.
import { dispatch, subscribe } from '../../../store/store.js';
const createMainHeaderElement = () => {
  const $mainHeader = createElement('header', {
    class: 'main-header',
  });

  const headerChildHTML = `
  <div class="main-header__media">
    <a class="main-header__all-media bold">
        전체 언론사
    </a>
    <a class="main-header__my-media">
        내가 구독한 언론사
    </a>
  </div>

  <div class="main-header__buttons">
    <a class="main-header__list-button">
        <i class="list-icon"></i>
    </a>
    <a class="main-header__grid-button">
        <i class="grid-icon grid-icon__enable"></i>
    </a>
</div>
  `;
  $mainHeader.innerHTML = headerChildHTML;
  return $mainHeader;
};

const createMainButtonElement = () => {
  const $leftButton = createElement('a', {
    // default view인 전체 언론사 grid 때문에 none을 주고 시작!
    class: 'left-button none',
    role: 'button',
  });
  const $rightButton = createElement('a', {
    class: 'right-button',
    role: 'button',
  });
  $leftButton.innerHTML = `<img src="./asset/leftButton.svg" alt="leftButton" />`;
  $rightButton.innerHTML = `<img src="./asset/rightButton.svg" alt="rightButton" />`;
  return [$leftButton, $rightButton];
};

const listViewButtonRender = ($mainButtons, content) => {
  // grid 4page에서 list 누르면 오른쪽 버튼 안나오는 버그 존재~!
  // 1. gird -> list 무조건 두개다 none 없어야함.
  // 2. list -> grid 첫번째 거 무조건 none 해야함. 얘는 그냥 됨. grid에서 구현해놓음
  // 왼쪽 버튼에 넣기!
  if (content.viewOption.gridOrList === 'grid') {
    $mainButtons[0].classList.add('none');
    $mainButtons[1].classList.remove('none');
  } else if (content.viewOption.gridOrList === 'list')
    $mainButtons.forEach(($button) => $button.classList.remove('none'));
};

const MainCommon = () => {
  const $mainHeader = createMainHeaderElement();
  const $mainButtons = createMainButtonElement();

  $mainButtons.forEach((button) => {
    button.addEventListener('click', pageControlBtnClickEventHandler);
  });

  $mainHeader.addEventListener('click', headerViewChangeBtnClickEventHandler);
  subscribe('viewOptionData', listViewButtonRender.bind(null, $mainButtons));

  return [$mainHeader, $mainButtons];
};

export default MainCommon;

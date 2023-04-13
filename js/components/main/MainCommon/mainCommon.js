import { createElement } from '../../../utils/dom.js';
import {
  pageControlBtnClickEventHandler,
  headerViewChangeBtnClickEventHandler,
} from './mainButtonEventHandlers.js';
// TODO : 이벤트 등록 해야함.
import { displayActionCreator } from '../../../actions/actions.js';
import { dispatch, subscribe } from '../../../store/store.js';
const createMainHeaderElement = () => {
  const $mainHeader = createElement('header', {
    class: 'main-header',
  });

  const headerChildHTML = `
  <div class="main-header__media">
    <a class="main-header__all-media">
        전체 언론사
    </a>
    <a class="main-header__my-media">
        내가 구독한 언론사
    </a>
  </div>

  <div class="main-header__buttons">
    <a class="main-header__list-button">
        <img src="./asset/listIcon.svg" />
    </a>
    <a class="main-header__grid-button">
        <img  src="./asset/gridIcon.svg" />
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

const listViewButtonRender = ($leftButton, content) => {
  // grid 4page에서 list 누르면 오른쪽 버튼 안나오는 버그 존재~!
  const breakCondition =
    content.viewOption.gridOrList === 'grid' &&
    $leftButton.classList.contains('none');
  if (breakCondition) return;
  $leftButton.classList.remove('none');
};

const MainCommon = () => {
  const $mainHeader = createMainHeaderElement();
  const $mainButtons = createMainButtonElement();

  $mainButtons.forEach((button) => {
    button.addEventListener('click', pageControlBtnClickEventHandler);
  });

  $mainHeader.addEventListener('click', headerViewChangeBtnClickEventHandler);
  subscribe('viewOptionData', listViewButtonRender.bind(null, $mainButtons[0]));
  return [$mainHeader, $mainButtons];
};

export default MainCommon;

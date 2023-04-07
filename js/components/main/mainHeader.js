import { createElement } from '../../utils/dom.js';

// TODO : 이벤트 등록 해야함.

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
    <a>
        <img class="main-header__list-button" src="./asset/listIcon.svg" />
    </a>
    <a>
        <img class="main-header__grid-button" src="./asset/gridIcon.svg" />
    </a>
</div>
  `;
  $mainHeader.innerHTML = headerChildHTML;
  return $mainHeader;
};

const MainHeader = () => {
  const $mainHeader = createMainHeaderElement();
  return $mainHeader;
};

export default MainHeader;

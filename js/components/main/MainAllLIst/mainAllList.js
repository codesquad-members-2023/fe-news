import { createElement } from '../../../utils/dom.js';
import { subscribe, getStoreState } from '../../../store/store.js';

const MEDIA_CATEGORIES = [
  '종합/경제',
  '방송/통신',
  'IT',
  '영자지',
  '스포츠/연애',
  '매거진/전문지',
  '지역',
];

const createMainListElement = (mediaData) => {
  const $mainList = createElement('section', {
    class: 'main-list',
  });
  const $mainNav = createMainListNavElement();
  const $mainNews = createMainListNewsElement(mediaData);
  $mainList.append($mainNav, $mainNews);

  return $mainList;
};

const navItemHTML = (category) => `
    <li class="main-list__nav-item">
        <a href="#">${category}</a>
    </li>`;

const createMainListNavElement = () => {
  const $mainListNav = createElement('nav', {
    class: 'main-list__nav',
  });
  const $navItems = createElement('ul', {
    class: 'main-list__nav-items',
  });

  $navItems.innerHTML = MEDIA_CATEGORIES.reduce((html, category) => {
    html += navItemHTML(category);
    return html;
  }, ``);
  $mainListNav.append($navItems);
  return $mainListNav;
};

const createMainListNewsElement = (mediaData) => {
  const $mainListNews = createElement('article', {
    class: 'main-list__news',
  });
  const $mainListNewsHeader = createNewsHeaderElement(mediaData.mediaInfo);

  const $mainListNewsContent = createNewsContentElement(
    mediaData.mainContent,
    mediaData.subContent,
  );
  $mainListNews.append($mainListNewsHeader, $mainListNewsContent);

  return $mainListNews;
};

const createNewsHeaderElement = (mediaInfo) => {
  const $mainNewsHeader = createElement('header', {
    class: 'main-list__news-header',
  });
  const headerInnerHTML = `
    <img class="main-list__logo" src="${mediaInfo.imgSrc}" />
      <span class="main-list__edit-time">${mediaInfo.modifiedTime}</span>
      <a class="subscribe-button">
        <img src="./asset/subscribeButton.svg" alt="subscribe" />
      </a>
      `;
  $mainNewsHeader.innerHTML = headerInnerHTML;
  return $mainNewsHeader;
};

const createNewsContentElement = (mainContent, subContent) => {
  const $mainListNewsContent = createElement('article', {
    class: 'main-list__media-content',
  });

  const mainNewsHTML = `
  <section class="main-news">
    <img class="main-news__img" src="${mainContent.mainImgSrc}" />
    <span class="main-news__title">${mainContent.mainTitle}</span>
  </section>`;

  const subNewsHTML = `
    <section class="sub-news">
        <ul class="sub-news__items">
            ${subContent.subNewsList.reduce((html, text) => {
              html += `<li class="sub-news__item">${text}</li>`;
              return html;
            }, ``)}
        </ul>
        <footer class="news-footer">${subContent.noticeMessage}</footer>
    </section>`;

  $mainListNewsContent.innerHTML = mainNewsHTML + subNewsHTML;
  return $mainListNewsContent;
};

const renderMainAllList = ($main, content) => {
  const mediaData = getStoreState('mediaData').data;

  const breakCondition =
    content.viewOption.gridOrList === 'list' &&
    content.viewOption.allOrMine === 'all';
  if (!breakCondition) return;

  const $mainList = createMainListElement(mediaData[0]);
  $main.replaceChild($mainList, $main.lastChild);
};

const MainAllList = ($main) => {
  subscribe('viewOptionData', renderMainAllList.bind(null, $main));
};

export default MainAllList;

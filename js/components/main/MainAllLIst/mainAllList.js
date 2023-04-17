import { createElement } from '../../../utils/dom.js';
import { subscribe, getStoreState } from '../../../store/store.js';
import {
  tabClickEventHandler,
  subscribeBtnClickEventHandler,
} from './mainAllListEventHandlers.js';

export const MEDIA_CATEGORIES = [
  '종합/경제',
  '방송/통신',
  'IT',
  '영자지',
  '스포츠/연애',
  '매거진/전문지',
  '지역',
];

const createMainListElement = (mediaData, typeIdx, content) => {
  const $mainList = createElement('section', {
    class: 'main-list',
  });
  const $mainNav = createMainListNavElement(typeIdx, content);
  const $mainNews = createMainListNewsElement(mediaData);
  $mainList.append($mainNav, $mainNews);

  return $mainList;
};

const navItemHTML = (category, typeIdx, content) => `
    <li class="main-list__nav-item ${
      typeIdx === MEDIA_CATEGORIES.indexOf(category) ? 'current-category' : ''
    }" >
        <a href="#">
        <span>${category}</span>
        <span>${
          typeIdx === MEDIA_CATEGORIES.indexOf(category)
            ? content.typePage + '/' + content.typeLength
            : ''
        }</span>
        </a>
    </li>`;

const createMainListNavElement = (typeIdx, content) => {
  const $mainListNav = createElement('nav', {
    class: 'main-list__nav',
  });
  const $navItems = createElement('ul', {
    class: 'main-list__nav-items',
  });

  $navItems.innerHTML = MEDIA_CATEGORIES.reduce((html, category) => {
    html += navItemHTML(category, typeIdx, content);
    return html;
  }, ``);
  $mainListNav.append($navItems);
  return $mainListNav;
};

const createMainListNewsElement = (mediaData) => {
  const $mainListNews = createElement('article', {
    class: 'main-list__news',
  });
  const $mainListNewsHeader = createNewsHeaderElement(mediaData);

  const $mainListNewsContent = createNewsContentElement(
    mediaData.mainContent,
    mediaData.subContent,
  );
  $mainListNews.append($mainListNewsHeader, $mainListNewsContent);

  return $mainListNews;
};

const createNewsHeaderElement = (mediaData) => {
  const $mainNewsHeader = createElement('header', {
    class: 'main-list__news-header',
  });
  const headerInnerHTML = `
    <img class="main-list__logo" src="${mediaData.mediaInfo.imgSrc}" />
      <div class="main-list__edit-time">${
        mediaData.mediaInfo.modifiedTime
      }</div>
      <a class="list__subscribe-button">
      ${
        !checkSubscribe(mediaData.mediaId)
          ? `<img src="./asset/subscribeButton.svg" alt="subscribe" />`
          : `<img src="./asset/listUnsubscribeBtn.svg" alt="unsubscribe" />`
      }
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
    <div class="main-news__img">
      <a href="#">
        <img src="${mainContent.mainImgSrc}" />
      </a>
    </div>
    <span class="main-news__title"><a>${mainContent.mainTitle}</a></span>
  </section>`;

  const subNewsHTML = `
    <section class="sub-news">
        <ul class="sub-news__items">
            ${subContent.subNewsList.reduce((html, text) => {
              html += `<li class="sub-news__item"><a href="#">${text}</a></li>`;
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
  const pageData = getStoreState('listPageData');
  const breakCondition =
    content.viewOption.gridOrList === 'list' &&
    content.viewOption.allOrMine === 'all';
  if (!breakCondition) return;

  const $mainList = createMainListElement(mediaData[content.page], 0, pageData);
  $mainList.addEventListener('click', tabClickEventHandler);
  $mainList
    .querySelector('.list__subscribe-button')
    .addEventListener(
      'click',
      subscribeBtnClickEventHandler.bind(null, mediaData[content.page].mediaId),
    );
  $main.replaceChild($mainList, $main.lastChild);
};

const renderNextPage = ($main, content) => {
  const typeIdx = content.currentMediaTypeIdx;
  const mediaData = getStoreState('mediaData').data;
  const $mainList = createMainListElement(
    mediaData[content.page],
    typeIdx,
    content,
  );
  $mainList.addEventListener('click', tabClickEventHandler);
  $mainList
    .querySelector('.list__subscribe-button')
    .addEventListener(
      'click',
      subscribeBtnClickEventHandler.bind(null, mediaData[content.page].mediaId),
    );
  $main.replaceChild($mainList, $main.lastChild);
};

const checkSubscribe = (curMediaId) => {
  const subscribeMediaId = getStoreState('subscribeData').subscribe.map(
    (item) => item.mediaId,
  );
  if (subscribeMediaId.includes(curMediaId)) return true;
  else return false;
};

const MainAllList = ($main) => {
  subscribe('viewOptionData', renderMainAllList.bind(null, $main));
  subscribe('listPageData', renderNextPage.bind(null, $main));
};

export default MainAllList;

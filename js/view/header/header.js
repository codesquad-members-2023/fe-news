import { createElement, createSVGElement } from '../../utils/dom.js';
const createHeaderElement = () => {
  const $element = createElement('header', {
    id: 'header',
  });
  const $leftElement = createLeftElement();
  const $rightElement = createRightElement();
  $element.append($leftElement, $rightElement);
  return $element;
};

const createLeftElement = () => {
  const $leftElement = createElement('div', {
    class: 'header__logo',
  });

  const $a = createElement('a');
  const $logo = createElement('img', {
    src: 'asset/logo.svg',
    alt: '뉴스스탠드로고',
  });
  const $logoText = createElement('span');
  $logoText.innerText = '뉴스스탠드';

  $leftElement.append($a);
  $leftElement.childNodes[0].append($logo, $logoText);

  return $leftElement;
};

const createRightElement = () => {
  const $rightElement = createElement('span', {
    class: 'header__current-date',
  });
  $rightElement.innerText = changeKorFormatDate();

  return $rightElement;
};

const changeKorFormatDate = () => {
  // 엄밀히 따지자면 로직 부분으로 가야할듯..
  const date = new Date();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  };
  return date.toLocaleDateString('ko-KR', options);
};

const Header = () => {
  const $header = createHeaderElement();
  return $header;
};

export default Header;

const headerElement = {
  logoImgSrc: '/src/asset/headerIcon.svg',
  imgAlt: 'newspaper',
  title: '뉴스스탠드',
};

const headlineElement = {
  title: '연합뉴스',
  headlineLength: 5,
};

const headlineAnimationInfo = {
  transitionDuration: 500,
  leftDelayDuration: 3000,
  rightDelayDuration: 1000,
  headlineLiWidth: 17,
};

const dataUrl = 'http://localhost:3001/';

const ref = {
  newsstandContainer: document.querySelector('.newsstand_container'),
};

export { headerElement, headlineElement, headlineAnimationInfo, dataUrl, ref };

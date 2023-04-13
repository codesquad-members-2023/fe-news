const NSHeaderInfo = {
  logoImgSrc: '/src/asset/headerIcon.svg',
  imgAlt: 'newspaper',
  title: '뉴스스탠드',
};

const NSHeadlineInfo = {
  title: '연합뉴스',
  headlineLength: 5,
  animationInfo: {
    transitionDuration: 500,
    leftDelayDuration: 3000,
    rightDelayDuration: 1000,
    headlineLiWidth: 17,
  },
};

const dataUrl = 'http://localhost:3001/';

const ref = {
  newsstandContainer: document.querySelector('.newsstand_container'),
};

export { NSHeaderInfo, NSHeadlineInfo, dataUrl, ref };

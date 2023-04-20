const NS_HEADER_INFO = Object.freeze({
  LOGO_IMG_SRC: '/src/asset/headerIcon.svg',
  IMG_ALT: 'newspaper',
  TITLE: '뉴스스탠드',
});

const NS_HEADLINE_INFO = Object.freeze({
  TITLE: '연합뉴스',
  HEADLINE_LENGTH: 5,
  ANIMATION: {
    TRANSITION_DURATION: 500,
    LEFT_DELAY_DURATION: 3000,
    RIGHT_DELAY_DURATION: 1000,
    HEADLINE_LIST_HEIGHT: 17,
  },
});

const NS_SECTION_INFO = Object.freeze({
  GRID_ALL: {
    ALL_SIZE: 96,
    PAGE_SIZE: 24,
    MIN_PAGE_INDEX: 1,
    MAX_PAGE_INDEX: 4,
  },
});

const RENDER_STATE = Object.freeze({
  READY: 'READY',
  NOT_READY: 'NOT_READY',
});

const VIEW_STATE = Object.freeze({
  GRID: 'GRID',
  LIST: 'LIST',
  ALL: 'ALL',
  SUB: 'SUB',
});

const REFERENCE = Object.freeze({
  NS_CONTAINER: document.querySelector('.newsstand_container'),
});

export { NS_HEADER_INFO, NS_HEADLINE_INFO, NS_SECTION_INFO, REFERENCE, RENDER_STATE, VIEW_STATE };

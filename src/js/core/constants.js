import systemTimeOption from '../utils/systemTime.js'

const CONSTANTS = {
  'NEWS_STAND' : '뉴스스탠드',
  'ROLLING_LINK_PRESS' : '연합뉴스',
}

export const VIEWTYPE = {
  'all' : '전체 언론사',
  'subscribe' : '내가 구독한 언론사',
}

const rollingPositionClassName = ['left', 'right'];

const URL = 'http://localhost:3001';
export const API_URL = {
  'rolling' : `${URL}/rollingData`,
  'media' : `${URL}/mediaData`,
}

export const autoAnimationInfo = {
  pageDelayTime: 5000,
}

export const TOTAL_GRID_COUNT = 96;

export const PRESS_BUTTON = {
  'subscribe' : '구독하기',
  'unsubscribe' : '해지하기',
}

export const GRID_INFO = {
  'FIRST_PAGE': 0,
  'LAST_PAGE': 3,
  'GRID_COUNT': 24,
}

export const newsHeaderInfo = {
  headerTitle: CONSTANTS['NEWS_STAND'],
  timeOption: systemTimeOption,
}

export const rollingBarInfo = {
  newsTitle: CONSTANTS['ROLLING_LINK_PRESS'],
  postionClassName: rollingPositionClassName,
  autoAnimationInfo: {
    transitionDuration: '500ms',
    leftDelayTime: 4000,
    timeDiff: 1000,
  },
}
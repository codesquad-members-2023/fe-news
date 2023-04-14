export const CONSTANTS = {
  'NEWS_STAND' : '뉴스스탠드',
  'ROLLING_LINK_PRESS' : '연합뉴스',
  'ALL_PRESS' : '전체 언론사',
  'SUBSCRIBED_PRESS' : '내가 구독한 언론사',
}

export const rollingPositionClassName = ['left', 'right'];

const URL = 'http://localhost:3001';
export const API_URL = {
  'rolling' : `${URL}/rollingData`,
  'media' : `${URL}/mediaData`,
}

export const autoAnimationInfo = {
  transitionDuration : '500ms',
  leftDelayTime : 4000,
  timeDiff : 1000,
}

export const TOTAL_GRID_COUNT = 96;
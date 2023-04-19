export const CONSTANTS = {
  'NEWS_STAND' : '뉴스스탠드',
  'ROLLING_LINK_PRESS' : '연합뉴스',
  'all' : '전체 언론사',
  'subscribed' : '내가 구독한 언론사',
}

export const CATEGORY = {
  'toteco' : '종합/경제',
  'tvcom' : '방송/통신',
  'it' : 'IT',
  'eng' : '영자지',
  'sporent' : '스포츠/연예',
  'magtec' : '매거진/전문지',
  'local' : '지역',
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
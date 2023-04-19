import createStore from '../utils/createStore.js';
import { autoDataReducer, mediaDataReducer } from './dataReducer.js';
import {
  subscribeReducer,
  mainHeaderBtnClickReducer,
  listPageReducer,
  animationReducer,
} from './displayReducer.js';

const defaultAutoRollingData = {
  leftRollingData: [],
  rightRollingData: [],
};

const defaultMediaData = {
  data: [],
};

export const defaultSubscribeData = {
  subscribe: [],
  mineListCurPage: 0,
};

const defaultViewOptionData = {
  viewOption: {
    allOrMine: 'all',
    gridOrList: 'grid',
  },
  page: 0,
};

const defaultListPageData = {
  page: 0,
  typePage: 1, // 언론사가 속한 타입에서의 page
  currentMediaTypeIdx: 0, // 탭 종류 idx
  typeLength: 82,
};

const defaultAnimaitonData = {
  animaitionId: null,
};

// Store의 State 초기화.
const initialState = {
  ['autoData']: defaultAutoRollingData,
  ['mediaData']: defaultMediaData,
  ['subscribeData']: defaultSubscribeData,
  ['viewOptionData']: defaultViewOptionData,
  ['listPageData']: defaultListPageData,
  ['animationData']: defaultAnimaitonData,
};

const store = createStore();

store.addDomain('autoData', autoDataReducer, initialState['autoData']);
store.addDomain('mediaData', mediaDataReducer, initialState['mediaData']);
store.addDomain(
  'subscribeData',
  subscribeReducer,
  initialState['subscribeData'],
);
store.addDomain(
  'viewOptionData',
  mainHeaderBtnClickReducer,
  initialState['viewOptionData'],
);

store.addDomain(
  'animationData',
  animationReducer,
  initialState['animationData'],
);

store.addDomain('listPageData', listPageReducer, initialState['listPageData']);
export const { dispatch, subscribe, getStoreState } = store;

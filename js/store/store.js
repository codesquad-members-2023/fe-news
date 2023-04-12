import createStore from '../utils/createStore.js';
import { autoDataReducer, mediaDataReducer } from './dataReducer.js';
import {
  subscribeReducer,
  mainHeaderBtnClickReducer,
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
};

const defaultViewOptionData = {
  viewOption: {
    allOrMine: 'all',
    gridOrList: 'grid',
  },
};

// Store의 State 초기화.
const initialState = {
  ['autoData']: defaultAutoRollingData,
  ['mediaData']: defaultMediaData,
  ['subscribeData']: defaultSubscribeData,
  ['viewOptionData']: defaultViewOptionData,
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
export const { dispatch, subscribe, getStoreState } = store;

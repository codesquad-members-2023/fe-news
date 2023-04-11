import createStore from '../utils/createStore.js';
import { autoDataReducer, mediaDataReducer } from './dataReducer.js';
import { subscribeReducer } from './displayReducer.js';

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

// Store의 State 초기화.
const initialState = {
  ['autoData']: defaultAutoRollingData,
  ['mediaData']: defaultMediaData,
  ['subscribeData']: defaultSubscribeData,
};

const store = createStore();

store.addDomain('autoData', autoDataReducer, initialState['autoData']);
store.addDomain('mediaData', mediaDataReducer, initialState['mediaData']);
store.addDomain(
  'subscribeData',
  subscribeReducer,
  initialState['subscribeData'],
);
export const { dispatch, subscribe, getStoreState } = store;

import createStore from '../utils/createStore.js';
import { autoDataReducer, mediaDataReducer } from './dataReducer.js';

const defaultAutoRollingData = {
  leftRollingData: [],
  rightRollingData: [],
};

const defaultMediaData = {
  data: [],
};

// Store의 State 초기화.
const initialState = {
  ['autoData']: defaultAutoRollingData,
  ['mediaData']: defaultMediaData,
};

const store = createStore();

store.addDomain('autoData', autoDataReducer, initialState['autoData']);
store.addDomain('mediaData', mediaDataReducer, initialState['mediaData']);

export const { dispatch, subscribe, getStoreState } = store;

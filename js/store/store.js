import createStore from '../utils/createStore.js';

const defaultAutoRollingData = {
  leftRollingData: [],
  rightRollingData: [],
};

const defaultMediaData = {
  data: [],
};

// Store의 State 초기화.
const initialState = {
  autoData: defaultAutoRollingData,
  mediaData: defaultMediaData,
};

const store = createStore();

export const { dispatch, subscribe, getStoreState } = store;

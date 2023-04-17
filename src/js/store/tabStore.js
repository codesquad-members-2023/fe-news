import Store from '../core/store.js';
import { tabReducer } from '../reducer/tabReducer.js';

const INIT_TAB_STATE = {
  activePressTab: 'all',
  activeShowTab: 'grid'
};

export const tabStore = new Store(INIT_TAB_STATE, tabReducer);

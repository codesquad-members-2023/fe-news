import Store from '../core/store.js';
import { tabReducer, gridPageReducer, subscriptionListReducer } from '../reducer/index.js';

const INIT_TAB_STATE = {
  activePressTab: 'all',
  activeShowTab: 'grid'
};

export const tabStore = new Store(INIT_TAB_STATE, tabReducer);

const INIT_GRID_PAGE_STATE = {
  all: { currentPage: null, totalPages: null },
  subscribed: { currentPage: null, totalPages: null }
};

export const gridPageStore = new Store(INIT_GRID_PAGE_STATE, gridPageReducer);

const INIT_SUBSCRIPTION_LIST_STATE = {
  subscriptionList: []
};

export const subscriptionListStore = new Store(INIT_SUBSCRIPTION_LIST_STATE, subscriptionListReducer);

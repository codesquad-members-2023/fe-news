import { displayActions } from '../actions/actionTypes.js';
import { getStoreState } from './store.js';
import { defaultSubscribeData } from './store.js';
export const subscribeReducer = (state, action) => {
  switch (action.type) {
    case displayActions.GRID_SUBSCRIBE_BUTTON_CLICK:

    case displayActions.GRID_UNSUBSCRIBE_BUTTON_CLICK:
    default:
      return state;
  }
};

import { displayActions } from '../actions/actionTypes.js';
import { getStoreState } from './store.js';
import { defaultSubscribeData } from './store.js';

export const subscribeReducer = (state, action) => {
  const subscribeList = getStoreState('subscribeData').subscribe;
  switch (action.type) {
    case displayActions.GRID_SUBSCRIBE_BUTTON_CLICK:
      subscribeList.push(action.payload);
      console.log({ ...state, subscribe: subscribeList });
      return { ...state, subscribe: subscribeList };
    case displayActions.GRID_UNSUBSCRIBE_BUTTON_CLICK:
    default:
      return state;
  }
};

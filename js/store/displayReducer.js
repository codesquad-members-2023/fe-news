import { displayActions } from '../actions/actionTypes.js';
import { getStoreState } from './store.js';
import { defaultSubscribeData } from './store.js';

export const subscribeReducer = (state, action) => {
  const subscribeList = getStoreState('subscribeData').subscribe;
  const mediaWholeData = getStoreState('mediaData').data;
  switch (action.type) {
    case displayActions.GRID_SUBSCRIBE_BUTTON_CLICK:
      subscribeList.push(mediaWholeData[action.payload - 1]);
      return { ...state, subscribe: subscribeList };

    case displayActions.GRID_UNSUBSCRIBE_BUTTON_CLICK:
      subscribeList.some((subscribeMedia, index) => {
        if (String(subscribeMedia.mediaId) === action.payload) {
          subscribeList.splice(index, 1);
          return true;
        }
      });
      return { ...state, subscribe: subscribeList };
    default:
      return state;
  }
};

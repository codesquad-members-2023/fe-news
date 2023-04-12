import { displayActions } from '../actions/actionTypes.js';
import { getStoreState } from './store.js';

export const subscribeReducer = (state, action) => {
  const subscribeList = getStoreState('subscribeData').subscribe;
  const mediaWholeData = getStoreState('mediaData').data;
  switch (action.type) {
    case displayActions.GRID_SUBSCRIBE_BUTTON_CLICK:
      subscribeList.push(mediaWholeData[action.payload - 1]);
      return { subscribe: subscribeList };

    case displayActions.GRID_UNSUBSCRIBE_BUTTON_CLICK:
      subscribeList.some((subscribeMedia, index) => {
        if (String(subscribeMedia.mediaId) === action.payload) {
          subscribeList.splice(index, 1);
          return true;
        }
      });
      return { subscribe: subscribeList };

    default:
      return state;
  }
};

export const mainHeaderBtnClickReducer = (state, action) => {
  const viewOptionData = getStoreState('viewOptionData').viewOption;

  switch (action.type) {
    case displayActions.HEADER_LIST_BUTTON_CLICK:
      if (viewOptionData.gridOrList === 'list') return;
      viewOptionData.gridOrList = 'list';
      return { viewOption: viewOptionData };

    case displayActions.HEADER_GRID_BUTTON_CLICK:
      if (viewOptionData.gridOrList === 'grid') return;
      viewOptionData.gridOrList = 'grid';
      return { viewOption: viewOptionData };

    case displayActions.HEADER_MY_MEDIA_BUTTON_CLICK:
      if (viewOptionData.allOrMine === 'all') return;
      viewOptionData.allOrMine = 'all';
      return { viewOption: viewOptionData };

    case displayActions.HEADER_ALL_MEDIA_BUTTON_CLICK:
      if (viewOptionData.allOrMine === 'mine') return;
      viewOptionData.allOrMine = 'mine';
      return { viewOption: viewOptionData };

    default:
      return state;
  }
};

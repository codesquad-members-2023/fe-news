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
      if (viewOptionData.gridOrList === 'list')
        return { ...state, viewOption: viewOptionData };
      viewOptionData.gridOrList = 'list';
      return { ...state, viewOption: viewOptionData };

    case displayActions.HEADER_GRID_BUTTON_CLICK:
      if (viewOptionData.gridOrList === 'grid')
        return { ...state, viewOption: viewOptionData };
      viewOptionData.gridOrList = 'grid';
      return { ...state, viewOption: viewOptionData };

    case displayActions.HEADER_MY_MEDIA_BUTTON_CLICK:
      if (viewOptionData.allOrMine === 'all')
        return { ...state, viewOption: viewOptionData };
      viewOptionData.allOrMine = 'all';
      return { ...state, viewOption: viewOptionData };

    case displayActions.HEADER_ALL_MEDIA_BUTTON_CLICK:
      if (viewOptionData.allOrMine === 'mine')
        return { ...state, viewOption: viewOptionData };
      viewOptionData.allOrMine = 'mine';
      return { ...state, viewOption: viewOptionData };

    default:
      return state;
  }
};

export const listPageReducer = (state, action) => {
  let listPage = state.page;
  const mediaData = getStoreState('mediaData').data;
  const mediaDataLength = mediaData.length;
  switch (action.type) {
    case displayActions.LIST_LEFT_BUTTON_CLICK:
      if (listPage === 0) listPage = mediaDataLength - 1;
      listPage -= 1;
      return { page: listPage };
    case displayActions.LIST_RIGHT_BUTTON_CLICK:
      if (listPage === mediaDataLength - 1) listPage = 0;
      listPage += 1;
      return { page: listPage };
    default:
      return state;
  }
};

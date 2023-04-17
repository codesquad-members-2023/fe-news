import { displayActions } from '../actions/actionTypes.js';
import { getStoreState, dispatch } from './store.js';

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
      if (viewOptionData.allOrMine === 'mine')
        return { ...state, viewOption: viewOptionData };
      viewOptionData.allOrMine = 'mine';
      return { ...state, viewOption: viewOptionData };

    case displayActions.HEADER_ALL_MEDIA_BUTTON_CLICK:
      if (viewOptionData.allOrMine === 'all')
        return { ...state, viewOption: viewOptionData };
      viewOptionData.allOrMine = 'all';
      return { ...state, viewOption: viewOptionData };

    default:
      return state;
  }
};

export const listPageReducer = (state, action) => {
  const mediaData = getStoreState('mediaData').data;
  const mediaTypeIdxArr = mediaTypeIdxChecking(mediaData);
  switch (action.type) {
    case displayActions.LIST_LEFT_BUTTON_CLICK:
      return checkCurTypePage('left', state, mediaData, mediaTypeIdxArr);
    case displayActions.LIST_RIGHT_BUTTON_CLICK:
      return checkCurTypePage('right', state, mediaData, mediaTypeIdxArr);
    case displayActions.LIST_TAB_BUTTON_CLICK:
      return {
        page: mediaTypeIdxArr[action.payload].startIdx,
        typePage: 1,
        currentMediaTypeIdx: action.payload,
        typeLength: mediaTypeIdxArr[action.payload].length,
      };
    case displayActions.LIST_PAGE_RESET:
      return {
        page: 0,
        typePage: 1,
        currentMediaTypeIdx: 0,
        typeLength: 82,
      };
    default:
      return state;
  }
};

const mediaTypeIdxChecking = (mediaData) => {
  let currentType;
  const mediaTypeIdxArr = [];
  mediaData.forEach((media, idx) => {
    const mediaType = media.mediaInfo.type;
    if (currentType !== mediaType) {
      mediaTypeIdxArr.push({ startIdx: idx });
      currentType = mediaType;
    }
  });
  mediaTypeIdxArr.map((mediaTypeIdx, index) => {
    if (index === mediaTypeIdxArr.length - 1) {
      mediaTypeIdx.length = mediaData.length - mediaTypeIdx.startIdx;
    } else {
      mediaTypeIdx.length =
        mediaTypeIdxArr[index + 1].startIdx - mediaTypeIdx.startIdx;
    }
  });
  return mediaTypeIdxArr;
};

const checkCurTypePage = (direction, state, mediaData, mediaTypeIdxArr) => {
  const currentMediaTypeIdx = state.currentMediaTypeIdx;

  if (direction === 'left') {
    const prevTypeIdx =
      currentMediaTypeIdx === 0
        ? mediaTypeIdxArr.length - 1
        : currentMediaTypeIdx - 1;
    const prevPage = state.page === 0 ? mediaData.length - 1 : state.page - 1;
    if (
      prevPage < mediaTypeIdxArr[currentMediaTypeIdx].startIdx ||
      prevPage === mediaData.length - 1
    ) {
      return {
        page: prevPage,
        typePage: mediaTypeIdxArr[prevTypeIdx].length,
        currentMediaTypeIdx: prevTypeIdx,
        typeLength: mediaTypeIdxArr[prevTypeIdx].length,
      };
    } else {
      return {
        page: prevPage,
        typePage: state.typePage - 1,
        currentMediaTypeIdx: currentMediaTypeIdx,
        typeLength: mediaTypeIdxArr[currentMediaTypeIdx].length,
      };
    }
  } else if (direction === 'right') {
    const nextTypeIdx =
      currentMediaTypeIdx === mediaTypeIdxArr.length - 1
        ? 0
        : currentMediaTypeIdx + 1;
    const nextPage = state.page === mediaData.length - 1 ? 0 : state.page + 1;
    if (nextPage === mediaTypeIdxArr[nextTypeIdx].startIdx) {
      return {
        page: nextPage,
        typePage: 1,
        currentMediaTypeIdx: nextTypeIdx,
        typeLength: mediaTypeIdxArr[nextTypeIdx].length,
      };
    } else {
      return {
        page: nextPage,
        typePage: state.typePage + 1,
        currentMediaTypeIdx: currentMediaTypeIdx,
        typeLength: mediaTypeIdxArr[currentMediaTypeIdx].length,
      };
    }
  }
};

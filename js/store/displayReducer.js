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
  const mediaTypeIdxArr = mediaTypeIdxChecking(mediaData);
  switch (action.type) {
    case displayActions.LIST_LEFT_BUTTON_CLICK:
      if (listPage === 0) listPage = mediaDataLength - 1;
      else listPage -= 1;
      return { ...state, page: listPage };
    case displayActions.LIST_RIGHT_BUTTON_CLICK:
      if (listPage === mediaDataLength - 1) listPage = 0;
      else listPage += 1;
      return { ...state, page: listPage };
    case displayActions.LIST_TAB_BUTTON_CLICK:
      // TODO: 탭한 언론사 type의 1페이지를 state로 바꿔야함.
      // TODO : 탭한 언론사 idx 도 바꿔주기!
      return {
        page: mediaTypeIdxArr[action.payload],
        typePage: 1,
        currentMediaTypeIdx: action.payload,
      };
    default:
      return state;
  }
};

const checkMediaType = () => {
  // 이동한 페이지의 언론사가 무슨 type인지 계속 검사!!
  // 왼쪽 오른쪽 버튼 눌러도 검사해야함!
};

const mediaTypeIdxChecking = (mediaData) => {
  let currentType;
  const mediaTypeIdxArr = [];
  mediaData.forEach((media, idx) => {
    const mediaType = media.mediaInfo.type;
    if (currentType !== mediaType) {
      mediaTypeIdxArr.push(idx);
      currentType = mediaType;
    }
  });
  console.log(mediaTypeIdxArr);
  return mediaTypeIdxArr;
};

import { fetchAutoRollingData, fetchMediaData } from '../api/request.js';
import * as actionTypes from './actionTypes.js';
import { dispatch } from '../store/store.js';

// Action 생성자 함수.
export const fetchActionCreator = {
  fetchAutoDataRequest: () => {
    return { type: actionTypes.fetchActions.FETCH_AUTO_DATA_REQUEST };
  },

  fetchAutoDataSuccess: (payload) => {
    return {
      type: actionTypes.fetchActions.FETCH_AUTO_DATA_SUCCESS,
      payload,
    };
  },

  fetchMediaDataRequest: () => {
    return { type: actionTypes.fetchActions.FETCH_MEDIA_DATA_REQUEST };
  },

  fetchMediaDataSuccess: (payload) => {
    // Crong Review : payload로 받아서 바로 payload만 작성!
    return {
      type: actionTypes.fetchActions.FETCH_MEDIA_DATA_SUCCESS,
      payload,
    };
  },

  fetchAutoData: async function () {
    dispatch(this.fetchAutoDataRequest());

    const response = await fetchAutoRollingData();
    dispatch(this.fetchAutoDataSuccess(response.data));
  },

  fetchMediaData: async () => {
    // 여기선 this를 사용 불가.. 왜냐면 화살표 함수를 사용해서...!
    dispatch(fetchActionCreator.fetchMediaDataRequest());

    const response = await fetchMediaData();
    dispatch(fetchActionCreator.fetchMediaDataSuccess(response.data));
  },

  startActionCreator: () => {
    return {
      type: actionTypes.autoRollingActions.START_AUTO_ROLLING,
      payload: null, // startTime null로 보내주기.
    };
  },
};

export const displayActionCreator = {
  listPageReset() {
    return {
      type: actionTypes.displayActions.LIST_PAGE_RESET,
    };
  },
  gridSubscribeBtnClick: (payload) => {
    return {
      type: actionTypes.displayActions.GRID_SUBSCRIBE_BUTTON_CLICK,
      payload,
    };
  },

  gridUnsubscribeBtnClick: (payload) => {
    return {
      type: actionTypes.displayActions.GRID_UNSUBSCRIBE_BUTTON_CLICK,
      payload,
    };
  },

  headerListBtnClick() {
    dispatch(this.listPageReset());
    return {
      type: actionTypes.displayActions.HEADER_LIST_BUTTON_CLICK,
    };
  },

  headerGridBtnClick() {
    dispatch(this.listPageReset());
    return {
      type: actionTypes.displayActions.HEADER_GRID_BUTTON_CLICK,
    };
  },

  headerAllBtnClick() {
    dispatch(this.listPageReset());
    return {
      type: actionTypes.displayActions.HEADER_ALL_MEDIA_BUTTON_CLICK,
    };
  },

  headerMineBtnClick() {
    dispatch(this.listPageReset());
    return {
      type: actionTypes.displayActions.HEADER_MY_MEDIA_BUTTON_CLICK,
    };
  },

  listLeftBtnClick() {
    return {
      type: actionTypes.displayActions.LIST_LEFT_BUTTON_CLICK,
    };
  },

  listRightBtnClick() {
    return {
      type: actionTypes.displayActions.LIST_RIGHT_BUTTON_CLICK,
    };
  },

  listTabBtnClick(payload) {
    // 여기서 payload는 탭 한 놈의 미디어 타입 정보.
    return {
      type: actionTypes.displayActions.LIST_TAB_BUTTON_CLICK,
      payload,
    };
  },
};

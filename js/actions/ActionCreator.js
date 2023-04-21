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

    let response = await fetchMediaData();

    dispatch(
      fetchActionCreator.fetchMediaDataSuccess(
        response.data.sort((prev, cur) => {
          if (prev.mediaInfo.type === cur.mediaInfo.type) {
            return Math.random() > 0.5 ? -1 : 1;
          }
          return 0;
        }),
      ),
    );
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
    return function (dispatch) {
      dispatch(displayActionCreator.listPageReset());
      dispatch(displayActionCreator.mineListReset());
      dispatch(displayActionCreator.progressBarAnimationEnd());
      dispatch({
        type: actionTypes.displayActions.HEADER_LIST_BUTTON_CLICK,
      });
    };
  },

  headerGridBtnClick() {
    return function (dispatch) {
      dispatch(displayActionCreator.listPageReset());
      dispatch(displayActionCreator.mineListReset());
      dispatch(displayActionCreator.progressBarAnimationEnd());
      dispatch({
        type: actionTypes.displayActions.HEADER_GRID_BUTTON_CLICK,
      });
    };
  },

  headerAllBtnClick() {
    return function (dispatch) {
      dispatch(displayActionCreator.listPageReset());
      dispatch(displayActionCreator.mineListReset());
      dispatch(displayActionCreator.progressBarAnimationEnd());
      dispatch({
        type: actionTypes.displayActions.HEADER_ALL_MEDIA_BUTTON_CLICK,
      });
    };
  },

  headerMineBtnClick() {
    return function (dispatch) {
      dispatch(displayActionCreator.listPageReset());
      dispatch(displayActionCreator.mineListReset());
      dispatch(displayActionCreator.progressBarAnimationEnd());
      dispatch({
        type: actionTypes.displayActions.HEADER_MY_MEDIA_BUTTON_CLICK,
      });
    };
  },

  listLeftBtnClick() {
    return function (dispatch) {
      dispatch(displayActionCreator.progressBarAnimationEnd());
      dispatch({
        type: actionTypes.displayActions.LIST_LEFT_BUTTON_CLICK,
      });
    };
  },

  listRightBtnClick() {
    return function (dispatch) {
      dispatch(displayActionCreator.progressBarAnimationEnd());
      dispatch({
        type: actionTypes.displayActions.LIST_RIGHT_BUTTON_CLICK,
      });
    };
  },

  listTabBtnClick(payload) {
    // 여기서 payload는 탭 한 놈의 미디어 타입 정보.
    return function (dispatch) {
      dispatch(displayActionCreator.progressBarAnimationEnd());
      dispatch({
        type: actionTypes.displayActions.LIST_TAB_BUTTON_CLICK,
        payload,
      });
    };
  },

  mineListTabBtnClick(payload) {
    return function (dispatch) {
      dispatch(displayActionCreator.progressBarAnimationEnd());
      dispatch({
        type: actionTypes.displayActions.MINE_LIST_TAB_BUTTON_CLICK,
        payload,
      });
    };
  },

  mineListLeftBtnClick() {
    return function (dispatch) {
      dispatch(displayActionCreator.progressBarAnimationEnd());
      dispatch({
        type: actionTypes.displayActions.MINE_LIST_LEFT_BUTTON_CLICK,
      });
    };
  },

  mineListRightBtnClick() {
    return function (dispatch) {
      dispatch(displayActionCreator.progressBarAnimationEnd());
      dispatch({
        type: actionTypes.displayActions.MINE_LIST_RIGHT_BUTTON_CLICK,
      });
    };
  },

  mineListReset() {
    return {
      type: actionTypes.displayActions.MINE_LIST_RESET,
    };
  },

  progressBarAnimationStart(payload) {
    return {
      type: actionTypes.displayActions.PROGRESS_BAR_ANIMATION_START,
      payload,
    };
  },

  progressBarAnimationEnd() {
    return {
      type: actionTypes.displayActions.PROGRESS_BAR_ANIMATION_END,
    };
  },
};

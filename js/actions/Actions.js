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
  gridSubscribeBtnClick: () => {
    return {
      type: actionTypes.displayActions.GRID_SUBSCRIBE_BUTTON_CLICK,
    };
  },

  gridUnsubscribeBtnClick: () => {
    return {
      type: actionTypes.displayActions.GRID_UNSUBSCRIBE_BUTTON_CLICK,
    };
  },
};

import { fetchAutoRollingData, fetchMediaData } from '../api/request.js';
import * as actionTypes from './actionTypes.js';
import { dispatch } from '../store/store.js';

// Action 생성자 함수.
export const fetchActionCreator = {
  fetchAutoDataRequest: () => {
    return { type: actionTypes.fetchActions.FETCH_AUTO_DATA_REQUEST };
  },

  fetchAutoDataSuccess: (data) => {
    return {
      type: actionTypes.fetchActions.FETCH_AUTO_DATA_SUCCESS,
      payload: data,
    };
  },

  fetchMediaDataRequest: () => {
    return { type: actionTypes.fetchActions.FETCH_MEDIA_DATA_REQUEST };
  },

  fetchMediaDataSuccess: (data) => {
    return {
      type: actionTypes.fetchActions.FETCH_MEDIA_DATA_SUCCESS,
      payload: data,
    };
  },

  fetchAutoData: async () => {
    dispatch(fetchActionCreator.fetchAutoDataRequest());

    const response = await fetchAutoRollingData();
    dispatch(fetchActionCreator.fetchAutoDataSuccess(response.data));
  },

  fetchMediaData: async () => {
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

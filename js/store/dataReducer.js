import { fetchActions, autoRollingActions } from '../actions/actionTypes.js';

export const autoDataReducer = (state, action) => {
  switch (action.type) {
    case fetchActions.FETCH_AUTO_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fetchActions.FETCH_AUTO_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        leftRollingData: action.payload.leftRollingData,
        rightRollingData: action.payload.rightRollingData,
      };
    case autoRollingActions.START_AUTO_ROLLING:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const mediaDataReducer = (state, action) => {
  switch (action.type) {
    case fetchActions.FETCH_MEDIA_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fetchActions.FETCH_MEDIA_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
      };
  }
};

import { fetchActions } from '../actions/ActionTypes.js';

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
        data: action.payload,
      };
    default:
      return state;
  }
};

export const mediaDataReducer = (state, action) => {
  switch (action.type) {
    case fetchActions.FETCH_MEDIA_DATA_REQUEST:
    case fetchActions.FETCH_MEDIA_DATA_SUCCESS:
  }
};

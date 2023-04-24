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
      };
    case fetchActions.FETCH_MEDIA_DATA_SUCCESS:
      const data = [...action.payload];
      const gridData = [];

      while (gridData.length < 96) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomItem = data.splice(randomIndex, 1)[0];
        gridData.push(randomItem);
      }

      return {
        ...state,
        loading: false,
        data: action.payload,
        gridData: gridData,
      };
    default:
      return state;
  }
};

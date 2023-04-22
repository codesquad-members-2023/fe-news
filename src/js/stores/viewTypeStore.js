import Store from '../core/store.js';

const initialState = {
  press: {
    ALL: true,
    SUBSCRIBE: false,
  },
  view: {
    LIST: false,
    GRID: true,
  },
};

const viewTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PRESS':
      state.press[action.payload] = true;
      state.press[action.payload === 'ALL' ? 'SUBSCRIBE' : 'ALL'] = false;
      return {
        ...state,
      };
    case 'CHANGE_VIEW':
      state.view[action.payload] = true;
      state.view[action.payload === 'GRID' ? 'LIST' : 'GRID'] = false;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const ViewTypeStore = new Store(initialState, viewTypeReducer);
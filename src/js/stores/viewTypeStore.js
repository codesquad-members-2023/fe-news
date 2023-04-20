import Store from '../core/store.js';

const initialState = {
  press: {
    all: true,
    subscribed: false,
  },
  view: {
    list: false,
    grid: true,
  },
};

const viewTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PRESS':
      state.press[action.payload] = true;
      state.press[action.payload === 'all' ? 'subscribed' : 'all'] = false;
      return {
        ...state,
      };
    case 'CHANGE_VIEW':
      state.view[action.payload] = true;
      state.view[action.payload === 'grid' ? 'list' : 'grid'] = false;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const ViewTypeStore = new Store(initialState, viewTypeReducer);
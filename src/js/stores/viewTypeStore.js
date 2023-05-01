import Store from '../core/store.js';

const initialState = {
  press: {
    all: true,
    subscribe: false,
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
      state.press[action.payload === 'all' ? 'subscribe' : 'all'] = false;
      return {
        ...state,
      };
    case 'CHANGE_VIEW':
      state.view[action.payload] = true;
      state.view[action.payload === 'grid' ? 'list' : 'grid'] = false;
      return {
        ...state,
      };
    case 'MOVE_SUBSCRIBE_LIST':
      const activatedSubscribedListState = {
        press: {
          all: false,
          subscribe: true,
        },
        view: {
          list: true,
          grid: false,
        },
      }
      return {
        ...state,
        press: activatedSubscribedListState.press,
        view: activatedSubscribedListState.view,
      };
    default:
      return state;
  }
};

export const ViewTypeStore = new Store(initialState, viewTypeReducer);
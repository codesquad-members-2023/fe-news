import Store from '../core/Store.js';

const initialState = {
  mediaData: {
    media: [],
  },
  subscribeData: {
    subscribedList: [],
  }
}

const viewReducer = (state, actionKey, { data }) => {
  switch(actionKey) {
    case 'SET_GRIDVIEW':
      return { ...data };
    default:
      return { ...state };
  }
}

export const ViewStore = new Store(initialState, viewReducer);
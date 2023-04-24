import Store from '../core/store.js';

const initialState = { subscribedList: new Set() };

const subscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBSCRIBE':
      state.subscribedList.add(action.payload);
      return {
        ...state,
      };
    case 'UNSUBSCRIBE':
      state.subscribedList.delete(action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const SubscribeStore = new Store(initialState, subscribeReducer);

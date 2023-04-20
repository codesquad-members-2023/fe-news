import Store from '../core/store.js';

const initialState = {
  subscribedPress: [],
};

const subscribedPressReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SUBSCRIBED_DATA':

      return {
        ...state,
      };
    default:
      return state;
  }
};

export const SubscribePageStore = new Store(initialState, subscribedPressReducer);
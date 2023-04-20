import Store from '../core/store.js';
import { PageStore } from './pressPageStore.js';
import { SubscribeStore } from './subscribeStore.js';

const initialState = {
  subscribedPressInfo: [],
  pressIndex: 0,
};

const subscribedPressPageReducer = (state = initialState, action) => {
  const { subscribedList } = SubscribeStore.getState();
  const { page } = PageStore.getState();
  const currentSubscribedPressLogo = subscribedList;
  const pressData = page.pressData;
  switch (action.type) {
    case 'GET_SUBSCRIBED_PRESS':
      state.subscribedPressInfo = filterSubscribedPressData(currentSubscribedPressLogo, pressData);
      return {
        ...state,
      };
    // case 'PREV_PRESS':
    //   state.pressIndex = movePrevPress(state.pressIndex);
    //   return {
    //     ...state,
    //   };
    // case 'NEXT_PRESS':
    //   state.pressIndex = moveNextPress(state.pressIndex);
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};

const filterSubscribedPressData = (list, pressData) => {
  return pressData.filter(press => [...list].includes(press.pressLogo));
}

const movePrevPress = (pressIndex, subscribedPressInfo) => {
  const LAST_PAGE = subscribedPressInfo.length;
  pressIndex--;

  return pressIndex;
}

const moveNextPress = (pressIndex, subscribedPressInfo) => {
  const LAST_PAGE = subscribedPressInfo.length;
  pressIndex++;

  return pressIndex;
}

export const SubscribedPressPageStore = new Store(initialState, subscribedPressPageReducer);
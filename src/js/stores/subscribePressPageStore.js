import Store from '../core/store.js';
import { PageStore } from './pressPageStore.js';
import { SubscribeStore } from './subscribeListStore.js';

const initialState = {
  subscribedPressInfo: [],
  pressIndex: 0,
  currentPress: [],
};

const subscribedPressPageReducer = (state = initialState, action) => {
  const { subscribedList } = SubscribeStore.getState();
  const { page } = PageStore.getState();
  const currentSubscribedPressLogo = subscribedList;
  const pressData = page.pressData;
  switch (action.type) {
    case 'GET_SUBSCRIBED_PRESS':
      state.subscribedPressInfo = filterSubscribedPressData(
        currentSubscribedPressLogo,
        pressData,
      );
      if(state.pressIndex < 0) state.pressIndex = 0;
      state.pressIndex = state.subscribedPressInfo.length - 1;
      state.currentPress = state.subscribedPressInfo[state.pressIndex];
      return {
        ...state,
      }
    case 'CLICK_PRESS':
      state.pressIndex = state.subscribedPressInfo.findIndex(press => press.press === action.payload);
      state.currentPress = state.subscribedPressInfo[state.pressIndex];
      return {
        ...state,
      };
    case 'REMOVE_PRESS':
      const targetIndex = state.subscribedPressInfo.findIndex(press => press.pressLogo === action.payload);
      if(targetIndex === state.subscribedPressInfo.length - 1) state.pressIndex = state.subscribedPressInfo.length - 2;
      else return;
      return {
        ...state,
      };
    case 'PREV_PRESS':
      state.pressIndex = movePrevPress({ state });
      state.currentPress = state.subscribedPressInfo[state.pressIndex];
      return {
        ...state,
      };
    case 'NEXT_PRESS':
      state.pressIndex = moveNextPress({ state });
      state.currentPress = state.subscribedPressInfo[state.pressIndex];
      return {
        ...state,
      };
    default:
      return state;
  }
};

const filterSubscribedPressData = (list, pressData) => {
  return [...list].map(subscribedPressLogo => {
    return pressData.find(data => data.pressLogo === subscribedPressLogo);
  });
};

const movePrevPress = ({ state }) => {
  state.pressIndex--;
  if(state.pressIndex < 0 ) state.pressIndex = state.subscribedPressInfo.length - 1;
  return state.pressIndex;
};

const moveNextPress = ({ state }) => {
  state.pressIndex++;
  if(state.pressIndex > state.subscribedPressInfo.length - 1) state.pressIndex = 0;
  return state.pressIndex;
};

export const SubscribedPressPageStore = new Store(
  initialState,
  subscribedPressPageReducer,
);
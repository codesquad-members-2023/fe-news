import { createStore, ReducerType, ActionType } from '@utils/redux';
import { PressListType } from './pressType';

const initialState: PressListType = {
  pressList: [],
};

const setPressList = (payload: PressListType) => {
  return {
    pressList: payload.pressList,
  };
};

const subscribe = (state: PressListType, payload: string) => {
  const targetIndex = state.pressList.findIndex(
    (press) => press.pid === payload
  );
  if (targetIndex !== -1) state.pressList[targetIndex].isSubscribed = true;
  return state;
};

const unsubscribe = (state: PressListType, payload: string) => {
  const targetIndex = state.pressList.findIndex(
    (press) => press.pid === payload
  );
  if (targetIndex !== -1) state.pressList[targetIndex].isSubscribed = false;
  return state;
};

const reducer: ReducerType<PressListType> = (
  state = initialState,
  action: ActionType
): PressListType => {
  switch (action.type) {
    case 'SET_PRESS_LIST':
      return setPressList(action.payload);
    case 'SUBSCRIBE':
      return subscribe(state, action.payload);
    case 'UNSUBSCRIBE':
      return unsubscribe(state, action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

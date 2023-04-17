import { createStore, ReducerType, ActionType } from '@utils/redux';
import { PressListType } from './pressType';

const initialState: PressListType = {
  pressList: [],
};

interface props {
  state: PressListType;
}
interface setPressListProps {
  payload: PressListType;
}
interface subscribeProps extends props {
  payload: string;
}
interface unsubscribeProps extends props {
  payload: string;
}

const setPressList = ({ payload }: setPressListProps) => {
  return {
    pressList: payload.pressList,
  };
};

const subscribe = ({ state, payload }: subscribeProps) => {
  const targetIndex = state.pressList.findIndex(
    (press) => press.pid === payload
  );
  if (targetIndex !== -1) state.pressList[targetIndex].isSubscribed = true;
  return state;
};

const unsubscribe = ({ state, payload }: unsubscribeProps) => {
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
      console.log(action);
      return setPressList({ payload: action.payload });
    case 'SUBSCRIBE':
      console.log('subscribe');
      return subscribe({ state, payload: action.payload });
    case 'UNSUBSCRIBE':
      console.log('unsubscribe');
      return unsubscribe({ state, payload: action.payload });
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

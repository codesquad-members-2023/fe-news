import { createStore, ReducerType, ActionType } from '@utils/redux';
import { UserType } from './userType';
import { TEMP_ID } from '@constant/index';

const initialState: UserType = {
  id: TEMP_ID,
  subscribingPress: [] as string[],
};

interface props {
  state: UserType;
}

interface subscribeProps extends props {
  payload: string;
}

interface unsubscribeProps extends props {
  payload: string;
}

const subscribe = ({ state, payload }: subscribeProps) => {
  if (state.subscribingPress.length === 0)
    return { ...state, subscribingPress: [payload] };
  return {
    ...state,
    subscribingPress: [...state.subscribingPress, payload],
  };
};

const unsubscribe = ({ state, payload }: unsubscribeProps) => {
  const newSubscribingPress = state.subscribingPress.filter(
    (pressId: string) => pressId !== payload
  );
  return { ...state, subscribingPress: newSubscribingPress };
};

const reducer: ReducerType<UserType> = (
  state = initialState,
  action: ActionType
): UserType => {
  switch (action.type) {
    case 'SUBSCRIBE':
      return subscribe({ state, payload: action.payload });
    case 'UNSUBSCRIBE':
      return unsubscribe({ state, payload: action.payload });
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

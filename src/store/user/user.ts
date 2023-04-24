import { createStore, ReducerType, ActionType } from '@utils/redux';
import { UserType } from './userType';
import { TEMP_ID } from '@constant/index';

const initialState: UserType = {
  id: TEMP_ID,
  subscribingPressId: [] as string[],
};

const setUser = ({ payload }: { state: UserType; payload: any }) => {
  return { ...payload, subscribingPress: payload.subscribingPressIds };
};

const subscribe = ({
  state,
  payload,
}: {
  state: UserType;
  payload: string;
}) => {
  if (state.subscribingPressId.length === 0)
    return { ...state, subscribingPress: [payload] };
  return {
    ...state,
    subscribingPress: [...state.subscribingPressId, payload],
  };
};

const unsubscribe = ({
  state,
  payload,
}: {
  state: UserType;
  payload: string;
}) => {
  const newSubscribingPress = state.subscribingPressId.filter(
    (pressId: string) => pressId !== payload
  );
  return { ...state, subscribingPress: newSubscribingPress };
};

const reducer: ReducerType<UserType> = (
  state = initialState,
  action: ActionType
): UserType => {
  switch (action.type) {
    case 'SET_USER':
      return setUser({ state, payload: action.payload });
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

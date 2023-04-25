import { createStore, ReducerType, ActionType } from '@utils/redux';
import { UserType } from './userType';
import { TEMP_ID } from '@constant/index';

const initialState: UserType = {
  id: TEMP_ID,
  subscribingPressIds: [] as string[],
};

const setUser = ({ payload }: { state: UserType; payload: any }) => {
  return { ...payload, subscribingPressIds: payload.subscribingPressIds };
};

const subscribe = ({
  state,
  payload,
}: {
  state: UserType;
  payload: string;
}) => {
  if (state.subscribingPressIds.length === 0)
    return { ...state, subscribingPressIds: [payload] };
  return {
    ...state,
    subscribingPressIds: [...state.subscribingPressIds, payload],
  };
};

const unsubscribe = ({
  state,
  payload,
}: {
  state: UserType;
  payload: string;
}) => {
  const newSubscribingPress = state.subscribingPressIds.filter(
    (pressId: string) => pressId !== payload
  );
  return { ...state, subscribingPressIds: newSubscribingPress };
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

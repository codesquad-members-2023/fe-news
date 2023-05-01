import { createStore, ReducerType, ActionType } from '@utils/redux';
import { UserType } from './userType';
import { TEMP_ID } from '@constant/index';
import { subscribeAPI, unsubscribeAPI } from '@apis/user';
import Modal from '@common/Modal/Modal';
import UnsubscribeModal from '@common/Modal/UnsubscribeModal/UnsubscribeModal';

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
  let result;
  if (state.subscribingPressIds.length === 0)
    result = { ...state, subscribingPressIds: [payload] };
  else
    result = {
      ...state,
      subscribingPressIds: [...state.subscribingPressIds, payload],
    };

  subscribeAPI({ id: TEMP_ID, pressId: payload });
  return result;
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
  unsubscribeAPI({ id: TEMP_ID, pressId: payload });
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

import { createStore, ReducerType, ActionType } from '@utils/redux';
import { UserType } from './userType';

const TEMP_ID = 'realsnoopso';

const initialState: UserType = {
  id: TEMP_ID,
  subscribingPress: [] as string[],
};

const reducer: ReducerType<UserType> = (
  state = initialState,
  action: ActionType
): UserType => {
  switch (action.type) {
    case 'SUBSCRIBE':
      if (state.subscribingPress.length === 0)
        return { ...state, subscribingPress: [action.payload] };

      return {
        ...state,
        subscribingPress: [...state.subscribingPress, action.payload],
      };
    case 'UNSUBSCRIBE':
      const newSubscribingPress = state.subscribingPress.filter(
        (pressId: string) => pressId !== action.payload
      );
      return { ...state, subscribingPress: newSubscribingPress };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

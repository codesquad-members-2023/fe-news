import { createStore, ReducerType, ActionType } from '@utils/state';

interface UserType {
  subscribingPress: string[];
}

const initialState: UserType = {
  subscribingPress: [],
};

const reducer: ReducerType<UserType> = (
  state = initialState,
  action: ActionType
): UserType => {
  switch (action.type) {
    case 'SUBSCRIBE_PRESS':
      return { subscribingPress: [...state.subscribingPress, action.payload] };
    case 'UNSUBSCRIBE_PRESS':
      const newSubscribingPress = state.subscribingPress.filter(
        (press: string) => press !== action.payload
      );
      return { subscribingPress: newSubscribingPress };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;

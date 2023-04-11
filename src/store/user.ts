import { createStore, ReducerType, ActionType } from '@utils/state';

interface UserType {
  subscribingPress: string[];
}

const initialState: UserType = {
  subscribingPress: [],
};

const reducer: ReducerType<UserType> = (
  state = {
    subscribingPress: [],
  },
  action: ActionType
): UserType => {
  switch (action.type) {
    case 'SUBSCRIBE':
      console.log({ state });
      if (state.subscribingPress.length === 0)
        return { subscribingPress: [action.payload] };
      return {
        subscribingPress: [...state.subscribingPress, action.payload],
      };
    case 'UNSUBSCRIBE':
      const newSubscribingPress = state.subscribingPress.filter(
        (press: string) => press !== action.payload
      );
      return { subscribingPress: newSubscribingPress };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

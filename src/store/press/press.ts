import { createStore, ReducerType, ActionType } from '@utils/redux';
import { PressListType } from './pressType';

const initialState: PressListType = {
  pressList: [],
};

const reducer: ReducerType<PressListType> = (
  state = initialState,
  action: ActionType
): PressListType => {
  switch (action.type) {
    case 'SUBSCRIBE':

    case 'UNSUBSCRIBE':

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

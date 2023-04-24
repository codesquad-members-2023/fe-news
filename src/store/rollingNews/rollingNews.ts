import { createStore, ReducerType, ActionType } from '@utils/redux';
import { RollingNewsListType } from './rollingNewsType';

const initialState: RollingNewsListType = {
  rollingNewsList: [],
};

const reducer: ReducerType<RollingNewsListType> = (
  state = initialState,
  action: ActionType
): RollingNewsListType => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

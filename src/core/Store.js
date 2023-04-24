import { observable } from "./observer.js";

const thunk = (next) => (action) => {
  typeof action === "function" ? action(next) : next(action);
};

export const createStore = (reducer) => {
  const state = observable(reducer());

  const frozenState = {};

  // 재귀로 바꾸기 프로퍼티의 value가 객체면 방어가 안됨
  Object.keys(state).forEach((key) => {
    Object.defineProperty(frozenState, key, {
      get: () => state[key],
    });
  });

  const getState = () => frozenState;

  const dispatch = (action) => {
    const newState = reducer(state, action);

    for (const [key, value] of Object.entries(newState)) {
      if (!state[key]) continue;
      state[key] = value;
    }
  };

  const thunkDispatch = thunk(dispatch);

  return { getState, dispatch: thunkDispatch };
};

import { observable } from "./observer.js";

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
    if (typeof action === "function") {
      action(dispatch, getState);
      return;
    }

    const newState = reducer(state, action);

    for (const [key, value] of Object.entries(newState)) {
      if (!state[key]) continue;
      state[key] = value;
    }
  };

  return { getState, dispatch };
};

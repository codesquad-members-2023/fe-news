export type ListenerType = () => void;
export type ReducerType<S> = (state: S, action: ActionType) => S;

export interface ActionType {
  type: string;
  payload?: any;
}

export interface StroeType<S> {
  getState: () => S;
  subscribe: (listener: ListenerType) => () => void;
  dispatch: (action: ActionType) => void;
}

export const createStore = <S>(reducer: ReducerType<S>, initialState: S) => {
  const currentReducer = reducer;
  let currentState: S = initialState;
  let currentListeners = [] as ListenerType[];
  let nextListeners = currentListeners;
  let isDispatching = false;

  const getState = () => {
    return currentState;
  };

  const subscribe = (listener: ListenerType) => {
    if (isDispatching) {
      throw new Error('Cannot subscribe when the reducer is executing.');
    }
    let isSubscribed = true;
    nextListeners.push(listener);

    const unsubscribe = () => {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('Cannot unsubscribe when the reducer is executing.');
      }

      isSubscribed = false;
      const index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = [];
    };
    return unsubscribe;
  };

  const dispatch = (action: ActionType) => {
    if (isDispatching) {
      throw new Error('The reducer is already executing.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    const listeners = (currentListeners = nextListeners);

    listeners.forEach((listener, i) => {
      listener();
    });

    return action;
  };

  return {
    dispatch,
    subscribe,
    getState,
  };
};

type getStateType<T> = () => T;
type SetStateType<T> = (newState: T) => void;
type SubscribeType<T> = (listener: () => void) => void;

export const useState = <T>(
  initialValue: T
): [getStateType<T>, SetStateType<T>, SubscribeType<T>] => {
  let state = initialValue;
  const listeners: Set<() => void> = new Set<() => void>([]);

  const getState = () => state;

  const setState: SetStateType<T> = (newState: T) => {
    state = newState;
    listeners.forEach((listener) => listener());
  };

  const subscribe: SubscribeType<T> = (listener: () => void) => {
    listeners.add(listener);
  };

  return [getState, setState, subscribe];
};

// const [test, setTest, subscribeTest] = useState('메롱');

// subscribeTest(() => {
//   this.render(test());
// });

// subscribeTest(() => {
//   this.render(test());
// });

export type ListenerType = () => void;
export type ReducerType<S> = (state: S, action: ActionType) => S;

export interface ActionType {
  type: string;
  payload?: any;
}

export const createStore = <S>(reducer: ReducerType<S>, initialState: S) => {
  var currentReducer = reducer;
  var currentState: S = initialState;
  var currentListeners = [] as ListenerType[];
  var nextListeners = currentListeners;
  var isDispatching = false;

  const getState = () => {
    return currentState;
  };

  const subscribe = (listener: ListenerType) => {
    if (isDispatching) {
      throw new Error('Cannot subscribe when the reducer is executing.');
    }
    var isSubscribed = true;
    nextListeners.push(listener);

    const unsubscribe = () => {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('Cannot unsubscribe when the reducer is executing.');
      }

      isSubscribed = false;
      var index = nextListeners.indexOf(listener);
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

    var listeners = (currentListeners = nextListeners);

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  };

  return {
    dispatch,
    subscribe,
    getState,
  };
};

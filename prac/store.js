const initialState = {
  subscribingPress: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBSCRIBE_PRESS':
      return { subscribingPress: [...state.subscribingPress, action.payload] };
    case 'UNSUBSCRIBE_PRESS':
      const newSubscribingPress = state.subscribingPress.filter(
        (press) => press !== action.payload
      );
      return { ...newSubscribingPress };
    default:
      return state;
  }
};

export const createStore = (reducer) => {
  let state;
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log('state changed:', store.getState());
});

store.dispatch({ type: 'SUBSCRIBE_PRESS', payload: 'test' });

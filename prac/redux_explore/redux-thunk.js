function createStore(reducer, preloadedState) {
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    if (isDispatching) {
      throw new Error('Cannot subscribe when the reducer is executing.');
    }

    var isSubscribed = true;

    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('Cannot unsubscribe when the reducer is executing.');
      }

      isSubscribed = false;
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }

  function dispatch(action) {
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
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}

const createThunkMiddleware = (extraArgument) => {
  const middleware = (_ref) => {
    const dispatch = _ref.dispatch,
      getState = _ref.getState;
    return (next) => (action) => {
      if (typeof action === 'function')
        action(dispatch, getState, extraArgument);
      return next(action);
    };
  };
  return middleware;
};

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const thunkMiddleware = createThunkMiddleware();

const store = createStore(counterReducer, applyMiddleware(thunkMiddleware));

const fetchData = () => {
  return async (dispatch, getState, extraArgument) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });

    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();

      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
  };
};

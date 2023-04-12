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

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log('Current state:', store.getState());
});

store.dispatch({ type: 'INCREMENT' }); // Current state: { count: 1 }
store.dispatch({ type: 'INCREMENT' }); // Current state: { count: 2 }
store.dispatch({ type: 'DECREMENT' }); // Current state: { count: 1 }

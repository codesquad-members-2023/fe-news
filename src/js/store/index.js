function createStore({ initState = {}, reducer }) {
  let state = initState;
  const listeners = [];

  function getState() {
    return state;
  }

  // * 삭제된 컴포넌트가 등록한 listener가 제대로 삭제됐는지 확인하는 용도, 나중에 삭제 예정
  function getListeners() {
    return listeners;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());

    return action;
  }

  function register(listener) {
    listeners.push(listener);

    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    getState,
    getListeners,
    dispatch,
    register
  };
}

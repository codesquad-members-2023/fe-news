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

export const TAB_ACTION_TYPES = {
  TOGGLE_PRESS_TAB: 'TOGGLE_PRESS_TAB',
  TOGGLE_SHOW_TAB: 'TOGGLE_SHOW_TAB'
};

export const tabReducer = (state, action) => {
  switch (action.type) {
    case TAB_ACTION_TYPES.TOGGLE_PRESS_TAB: {
      const { activePressTab } = state;
      let newPressTab;

      if (activePressTab === 'all') newPressTab = 'mine';
      else if (activePressTab === 'mine') newPressTab = 'all';

      return { ...state, activePressTab: newPressTab };
    }
    case TAB_ACTION_TYPES.TOGGLE_SHOW_TAB: {
      const { activeShowTab } = state;
      let newShowTab;

      if (activeShowTab === 'grid') newShowTab = 'list';
      else if (activeShowTab === 'list') newShowTab = 'grid';

      return { ...state, activeShowTab: newShowTab };
    }
    default:
      return state;
  }
};

const INIT_TAB_STATE = {
  activePressTab: 'all',
  activeShowTab: 'grid'
};

export const tabStore = createStore({
  initState: INIT_TAB_STATE,
  reducer: tabReducer
});

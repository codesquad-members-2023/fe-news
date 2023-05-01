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

export const GRID_ACTION_TYPES = {
  INIT_STATE: 'INIT_STATE',
  NEXT_PAGE: 'NEXT_PAGE',
  BEFORE_PAGE: 'BEFORE_PAGE'
};

const gridReducer = (state, action) => {
  const { INIT_STATE, NEXT_PAGE, BEFORE_PAGE } = GRID_ACTION_TYPES;

  switch (action.type) {
    case INIT_STATE: {
      const { pressTab, totalPages } = action.payload;
      return { ...state, pressTab, currentPage: pressTab === 'mine' ? totalPages - 1 : 0, totalPages };
    }
    case NEXT_PAGE: {
      const { currentPage, totalPages } = state;
      const newPage = currentPage + 1 === totalPages ? currentPage : currentPage + 1;
      return { ...state, currentPage: newPage };
    }
    case BEFORE_PAGE: {
      const { currentPage } = state;
      const newPage = currentPage === 0 ? 0 : currentPage - 1;
      return { ...state, currentPage: newPage };
    }
    default:
      return state;
  }
};

const INIT_GRID_STATE = {
  pressTab: 'all',
  currentPage: 0,
  totalPages: null
};

export const gridStore = createStore({
  initState: INIT_GRID_STATE,
  reducer: gridReducer
});

export const SUBSCRIPTION_ACTION_TYPES = {
  ADD_SUBSCRIPTION: 'ADD_SUBSCRIPTION',
  DELETE_SUBSCRIPTION: 'DELETE_SUBSCRIPTION'
};

const subscriptionReducer = (state, action) => {
  const { ADD_SUBSCRIPTION, DELETE_SUBSCRIPTION } = SUBSCRIPTION_ACTION_TYPES;

  switch (action.type) {
    case ADD_SUBSCRIPTION: {
      const { subscriptionList } = state;

      const newSubscriptionList = [...subscriptionList];
      newSubscriptionList.push(action.payload);

      return {
        ...state,
        subscriptionList: newSubscriptionList
      };
    }
    case DELETE_SUBSCRIPTION: {
      const { subscriptionList } = state;

      const newSubscriptionList = subscriptionList.filter(
        ({ pressName }) => pressName !== action.payload.pressName
      );

      return {
        ...state,
        subscriptionList: newSubscriptionList
      };
    }
    default:
      return state;
  }
};

const INIT_SUBSCRIPTION_STATE = {
  subscriptionList: []
};

export const subscriptionStore = createStore({
  initState: INIT_SUBSCRIPTION_STATE,
  reducer: subscriptionReducer
});

import { createStore } from "../core/Store.js";

// INITIAL STATE
const initState = {
  latestNews: {
    headNewses: [],
    breakNewses: [],
  },
  contents: {
    subscribingPresses: [],
    presses: [],
    viewOption: "list",
    subscriptionOption: "all",
  },
  listView: {
    index: 0,
  },
};

// ACTION TYPE
export const FETCH_HEAD_NEWSES = "FETCH_HEAD_NEWSES";
export const FETCH_BREAK_NEWSES = "FETCH_BREAK_NEWSES";

export const FETCH_PRESSES = "FETCH_PRESSES";
export const LOAD_SUBSCRIBING = "LOAD_SUBSCRIBING";
export const ADD_SUBSCRIBING = "ADD_SUBSCRIBING";
export const REMOVE_SUBSCRIBING = "REMOVE_SUBSCRIBING";
export const SET_VIEW_GRID = "SET_VIEW_GRID";
export const SET_VIEW_LIST = "SET_VIEW_LIST";
export const SET_SUBSCRIPTION_ALL = "SET_SUBSCRIPTION_ALL";
export const SET_SUBSCRIPTION_SUB = "SET_SUBSCRIPTION_SUB";

export const SET_LIST_IDX = "SET_LIST_IDX";

// STORE (REDUCER)
export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case FETCH_HEAD_NEWSES:
      return {
        ...state,
        latestNews: {
          ...state.latestNews,
          headNewses: action.payload,
        },
      };
    case FETCH_BREAK_NEWSES:
      return {
        ...state,
        latestNews: {
          ...state.latestNews,
          breakNewses: action.payload,
        },
      };

    case FETCH_PRESSES:
      return {
        ...state,
        contents: {
          ...state.contents,
          presses: action.payload,
        },
      };
    case LOAD_SUBSCRIBING:
      return {
        ...state,
        contents: {
          ...state.contents,
          subscribingPresses: action.payload,
        },
      };

    case ADD_SUBSCRIBING:
      return {
        ...state,
        contents: {
          ...state.contents,
          subscribingPresses: [...state.subscribingPresses, action.payload],
        },
      };

    case REMOVE_SUBSCRIBING:
      return {
        ...state,
        contents: {
          ...state.contents,
          subscribingPresses: state.subscribingPresses.filter(
            (subscribingPress) => subscribingPress !== action.payload
          ),
        },
      };

    case SET_VIEW_GRID:
      return {
        ...state,
        contents: {
          ...state.contents,
          viewOption: "grid",
        },
      };

    case SET_VIEW_LIST:
      return {
        ...state,
        contents: {
          ...state.contents,
          viewOption: "list",
        },
      };

    case SET_SUBSCRIPTION_ALL:
      return {
        ...state,
        contents: {
          ...state.contents,
          subscriptionOption: "all",
        },
      };

    case SET_SUBSCRIPTION_SUB:
      return {
        ...state,
        contents: {
          ...state.contents,
          subscriptionOption: "sub",
        },
      };

    case SET_LIST_IDX:
      return {
        ...state,
        listView: {
          ...state.listView,
          index: action.payload,
        },
      };
    default:
      return state;
  }
});

// ACTION CREATOR

// thunk들 에러처리 구현..
export const fetchHeadNewses = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/head")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_HEAD_NEWSES, payload: data });
      });
  };
};

export const fetchBreakNewses = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/break")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_BREAK_NEWSES, payload: data });
      });
  };
};

export const fetchPresses = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/presses")
      .then((response) => response.json())
      .then((data) => {
        data.sort(() => Math.random() - 0.5);
        dispatch({ type: FETCH_PRESSES, payload: data });
      });
  };
};

export const loadSubscribing = (payload) => {
  return {
    type: LOAD_SUBSCRIBING,
    payload,
  };
};

export const addSubscribing = (payload) => ({
  type: ADD_SUBSCRIBING,
  payload,
});

export const removeSubscribing = (payload) => ({
  type: REMOVE_SUBSCRIBING,
  payload,
});

export const setViewGrid = () => ({
  type: SET_VIEW_GRID,
});

export const setViewList = () => ({
  type: SET_VIEW_LIST,
});

export const setSubscriptionAll = () => ({
  type: SET_SUBSCRIPTION_ALL,
});

export const setSubscriptionSubscribing = () => ({
  type: SET_SUBSCRIPTION_SUB,
});

export const setListIdx = (payload) => ({
  type: SET_LIST_IDX,
  payload,
});

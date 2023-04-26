import { createStore, ReducerType, ActionType } from '@utils/redux';
import {
  NewsType,
  TAB,
  VIEW,
  changePageNumberPropsType,
  changeTabPropsType,
  changeViewPropsType,
  setCurrentPagePropsType,
  setTotalPagePropsType,
} from './newsType';

const initialState: NewsType = {
  display: {
    currentTab: TAB.GENERAL,
    currentView: VIEW.GRID,
    currentPage: 0,
    totalPage: {
      grid: {
        general: 0,
        custom: 0,
      },
      list: {
        general: 0,
        custom: 0,
      },
    },
  },
};

const changeTab = ({ state, payload }: changeTabPropsType) => {
  state.display.currentTab = payload;
  state.display.currentPage = 0;
  return {
    ...state,
  };
};

const changeView = ({ state, payload }: changeViewPropsType) => {
  state.display.currentView = payload;
  state.display.currentPage = 0;
  return {
    ...state,
  };
};

const changePageNumber = ({ state, type }: changePageNumberPropsType) => {
  const display = state.display;
  const { currentView, currentTab, currentPage } = display;
  const totalPage = display.totalPage[currentView][currentTab];
  const isLastPage = 'list' && currentPage === totalPage;
  const isFirstPage = currentView === 'list' && currentPage === 0;

  switch (type) {
    case 'NEXT_PAGE': {
      display.currentPage = isLastPage ? 0 : currentPage + 1;
      return state;
    }
    case 'PREV_PAGE': {
      display.currentPage = isFirstPage ? totalPage : currentPage - 1;
      return state;
    }
    case 'RESET_PAGE': {
      display.currentPage = 0;
      return state;
    }
    default: {
      return state;
    }
  }
};

const setCurrentPage = ({ state, payload }: setCurrentPagePropsType) => {
  state.display.currentPage = payload.currentPage;
  return state;
};

const setTotalPage = ({ state, payload }: setTotalPagePropsType) => {
  const { view, tab, totalPage } = payload;
  state.display.totalPage[view][tab] = totalPage;
  return state;
};

const reducer: ReducerType<NewsType> = (
  state = initialState,
  action: ActionType
): NewsType => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return changeTab({ state, payload: action.payload });
    case 'CHANGE_VIEW':
      return changeView({ state, payload: action.payload });
    case 'NEXT_PAGE':
      return changePageNumber({ state, type: action.type });
    case 'PREV_PAGE':
      return changePageNumber({ state, type: action.type });
    case 'RESET_PAGE':
      return changePageNumber({ state, type: action.type });
    case 'SET_CURRENT_PAGE':
      return setCurrentPage({ state, payload: action.payload });
    case 'SET_TOTAL_PAGE':
      return setTotalPage({ state, payload: action.payload });
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

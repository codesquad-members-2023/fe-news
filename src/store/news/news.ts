import { createStore, ReducerType, ActionType } from '@utils/redux';
import {
  NewsType,
  TAB,
  VIEW,
  CATEGORY,
  changePageNumberPropsType,
  changeTabPropsType,
  changeViewPropsType,
  setCurrentPagePropsType,
  setTotalPagePropsType,
  unsubscribePropsType,
  setPressListPropsType,
  subscribePropsType,
  setRollingNewsPropsType,
  changeSectionPropsType,
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
  press: {
    pressList: [],
    customPressList: [],
  },
  rollingNews: {
    rollingNewsList: [],
  },
  section: {
    categoryCounts: {
      [CATEGORY.GENERAL]: 0,
      [CATEGORY.BRODCAST]: 0,
      [CATEGORY.IT]: 0,
      [CATEGORY.ENGLISH]: 0,
      [CATEGORY.SPORT]: 0,
      [CATEGORY.MAGAZINE]: 0,
      [CATEGORY.REGION]: 0,
    },
    section: {
      id: '',
      pressId: '',
      lastEdited: new Date(),
      articles: [],
      category: '',
      press: {
        pid: '',
        pname: '',
        newMainLogo: '',
        newMainLightLogo: '',
        newMainDarkLogo: '',
        thumbnailValid: false,
        valid: false,
        isSubscribed: false,
      },
    },
    totalNumber: 0,
    currentCategoryIndex: 0,
  },
};

const changeTab = ({ state, payload }: changeTabPropsType) => {
  state.display.currentTab = payload;
  return {
    ...state,
  };
};

const changeView = ({ state, payload }: changeViewPropsType) => {
  state.display.currentView = payload;
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
  const { currentView, currentTab } = state.display;
  state.display.totalPage[currentView][currentTab] = payload.totalPage;
  return state;
};

const setPressList = ({ state, payload }: setPressListPropsType) => {
  return {
    ...state,
    pressList: payload.pressList,
  };
};

const setCustomPressList = ({ state, payload }: setPressListPropsType) => {
  return {
    ...state,
    customPressList: payload.pressList,
  };
};

const subscribe = ({ state, payload }: subscribePropsType) => {
  const press = state.press;
  const targetIndex = press.pressList.findIndex(
    (press) => press.pid === payload
  );
  if (targetIndex !== -1) press.pressList[targetIndex].isSubscribed = true;
  return state;
};

const unsubscribe = ({ state, payload }: unsubscribePropsType) => {
  const press = state.press;
  const targetIndex = press.pressList.findIndex(
    (press) => press.pid === payload
  );
  if (targetIndex !== -1) press.pressList[targetIndex].isSubscribed = false;
  return state;
};

const setRollingNews = ({ state, payload }: setRollingNewsPropsType) => {
  return {
    ...state,
    rollingNews: {
      rollingNewsList: payload.rollingNewsList,
    },
  };
};

const setSection = ({ state, payload }: changeSectionPropsType) => {
  return {
    ...state,
    section: payload,
  };
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
    case 'SET_PRESS_LIST':
      return setPressList({ state, payload: action.payload });
    case 'SET_CUSTOM_PRESS_LIST':
      return setCustomPressList({ state, payload: action.payload });
    case 'SUBSCRIBE':
      return subscribe({ state, payload: action.payload });
    case 'UNSUBSCRIBE':
      return unsubscribe({ state, payload: action.payload });
    case 'SET_ROLLING_NEWS':
      return setRollingNews({ state, payload: action.payload });
    case 'SET_SECTION':
      return setSection({ state, payload: action.payload });
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

import { createStore, ReducerType, ActionType, StroeType } from '@utils/redux';
import { DisplayType } from './displayType';

const initialState: DisplayType = {
  currentTab: 'general',
  currentView: 'grid',
  page: {
    grid: {
      general: { currentPage: 0, totalPage: 0 },
      custom: { currentPage: 0, totalPage: 0 },
    },
    list: {
      general: { currentPage: 0, totalPage: 0 },
      custom: { currentPage: 0, totalPage: 0 },
    },
  },
  category: {
    grid: {
      general: { index: 0 },
      custom: { index: 0 },
    },
    list: {
      general: { index: 0 },
      custom: { index: 0 },
    },
  },
};

interface props {
  state: DisplayType;
}

interface changeTabProps extends props {
  payload: 'general' | 'custom';
}

interface changeViewProps extends props {
  payload: 'grid' | 'list';
}

interface changePageNumberProps extends props {
  type: 'NEXT_PAGE' | 'PREV_PAGE' | 'RESET_PAGE';
}

interface setTotlaPagePayload {
  view: 'grid' | 'view';
  tab: 'general' | 'custom';
  totalPage: number;
}

interface setTotalPageProps extends props {
  payload: setTotlaPagePayload;
}

interface setCurrentPagePayload {
  view: 'grid' | 'view';
  tab: 'general' | 'custom';
  currentPage: number;
}
interface setCurrentPageProps extends props {
  payload: setCurrentPagePayload;
}

const changeTab = ({ state, payload }: changeTabProps) => {
  state.currentTab = payload;
  return {
    ...state,
  };
};

const changeView = ({ state, payload }: changeViewProps) => {
  state.currentView = payload;
  return {
    ...state,
  };
};

const changePageNumber = ({ state, type }: changePageNumberProps) => {
  const currentView = state.currentView;
  const currentTab = state.currentTab;
  if (type === 'NEXT_PAGE') {
    state.page[currentView][currentTab].currentPage++;
    state.category[currentView][currentTab].index++;
  } else if (type === 'PREV_PAGE') {
    state.page[currentView][currentTab].currentPage--;
    state.category[currentView][currentTab].index--;
  } else {
    state.page[currentView][currentTab].currentPage = 0;
    state.category[currentView][currentTab].index = 0;
  }
  return state;
};

const setCurrentPage = ({ state, payload }: setCurrentPageProps) => {
  state.page[payload.view][payload.tab].currentPage = payload.currentPage;
  return state;
};

const setTotalPage = ({ state, payload }: setTotalPageProps) => {
  state.page[payload.view][payload.tab].totalPage = payload.totalPage;
  return state;
};

const reducer: ReducerType<DisplayType> = (
  state = initialState,
  action: ActionType
): DisplayType => {
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

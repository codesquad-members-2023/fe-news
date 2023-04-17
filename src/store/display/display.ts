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

interface setTotalPageProps extends props {
  totalPage: number;
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
  } else if (type === 'PREV_PAGE') {
    state.page[currentView][currentTab].currentPage--;
  } else {
    state.page[currentView][currentTab].currentPage = 0;
  }
  return state;
};

const setTotalPage = ({ state, totalPage }: setTotalPageProps) => {
  const currentView = state.currentView;
  const currentTab = state.currentTab;
  state.page[currentView][currentTab].totalPage = totalPage;
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
    case 'SET_TOTAL_PAGE':
      return setTotalPage({ state, totalPage: action.payload.totalPage });
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

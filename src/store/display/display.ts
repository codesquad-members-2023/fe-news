import { createStore, ReducerType, ActionType } from '@utils/redux';
import { DisplayType } from './displayType';

const initialState: DisplayType = {
  tab: {
    general: { isActive: true },
    custom: { isActive: false },
  },
  view: {
    list: { isActive: false },
    grid: { isActive: true },
  },
  page: {
    grid: {
      general: { currentPage: 0, totalPage: 0 },
      custom: { currentPage: 0, totalPage: 0 },
    },
    view: {
      general: { currentPage: 0, totalPage: 0 },
      custom: { currentPage: 0, totalPage: 0 },
    },
  },
};

const reducer: ReducerType<DisplayType> = (
  state = initialState,
  action: ActionType
): DisplayType => {
  switch (action.type) {
    case 'CHANGE_TAB':
      state.tab[action.payload].isActive = true;
      state.tab[action.payload === 'general' ? 'custom' : 'general'].isActive =
        false;
      return {
        ...state,
      };
    case 'CHANGE_VIEW':
      state.view[action.payload].isActive = true;
      state.view[action.payload === 'grid' ? 'list' : 'grid'].isActive = false;
      return {
        ...state,
      };
    case 'NEXT_PAGE':
      state.page[action.payload.view][action.payload.tab].currentPage++;
      return {
        ...state,
      };
    case 'PREV_PAGE':
      state.page[action.payload.view][action.payload.tab].currentPage--;
      return {
        ...state,
      };
    case 'RESET_PAGE':
      state.page[action.payload.view][action.payload.tab].currentPage = 0;
      return {
        ...state,
      };
    case 'SET_TOTAL_PAGE':
      state.page[action.payload.view][action.payload.tab].totalPage =
        action.payload.totalPage;
      return {
        ...state,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

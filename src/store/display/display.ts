import { createStore, ReducerType, ActionType } from '@utils/redux';
import { DisplayType, ElementType } from './displayType';

const initialState: DisplayType = {
  tab: [
    { name: '전체 언론사', isActive: true },
    { name: '내가 구독한 언론사', isActive: false },
  ],
  view: [
    { name: 'listView', isActive: true },
    { name: 'gridView', isActive: false },
  ],
};

const reducer: ReducerType<DisplayType> = (
  state = initialState,
  action: ActionType
): DisplayType => {
  switch (action.type) {
    case 'CHANGE_TAB':
      const newTab = state.tab.map((item: ElementType) => {
        if (item.name === action.payload) {
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      });
      return {
        ...state,
        tab: newTab,
      };
    case 'CHANGE_VIEW':
      const newView = state.view.map((item: ElementType) => {
        if (item.name === action.payload) {
          return { ...item, isActive: true };
        }
        return { ...item, isActive: false };
      });
      return {
        ...state,
        view: newView,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;

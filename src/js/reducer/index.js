import { CATEGORY_ORDER } from '../constants/index.js';

export const tabReducer = (state, action) => {
  switch (action.type) {
    case 'togglePressTab': {
      return { ...state, activePressTab: action.payload };
    }
    case 'toggleShowTab': {
      return { ...state, activeShowTab: action.payload };
    }
    default:
      return state;
  }
};

export const gridPageReducer = (state, action) => {
  switch (action.type) {
    case 'initGridPage': {
      const { pressTabType, currentPage, totalPages } = action.payload;
      return { ...state, [pressTabType]: { currentPage, totalPages } };
    }
    case 'nextPage': {
      const { pressTabType, currentPage, totalPages } = action.payload;
      const newPage = currentPage + 1 === totalPages ? currentPage : currentPage + 1;
      return { ...state, [pressTabType]: { currentPage: newPage, totalPages } };
    }
    case 'beforePage': {
      const { pressTabType, currentPage, totalPages } = action.payload;
      const newPage = currentPage - 1 === -1 ? 0 : currentPage - 1;
      return { ...state, [pressTabType]: { currentPage: newPage, totalPages } };
    }
    default:
      return state;
  }
};

export const subscriptionListReducer = (state, action) => {
  switch (action.type) {
    case 'addSubscription': {
      const newSubscriptionList = new Set(Array.from(state));
      newSubscriptionList.add(action.payload);

      return newSubscriptionList;
    }
    case 'deleteSubscription': {
      const newSubscriptionList = new Set(Array.from(state));
      newSubscriptionList.delete(action.payload);

      return newSubscriptionList;
    }
    default:
      return state;
  }
};

export const listPageReducer = (state, action) => {
  switch (action.type) {
    case 'nextPage': {
      const { pressTabType } = action.payload;

      if (pressTabType === 'all') {
        const { dataCountByCategory } = action.payload;
        const { currentCategory, currentItemIdx } = state[pressTabType];
        const categoryCount = CATEGORY_ORDER.length;

        const isSameCategory = currentItemIdx < dataCountByCategory[currentCategory] - 1;

        const currentCategoryIdx = CATEGORY_ORDER.indexOf(currentCategory);
        const nextCategoryIdx = (currentCategoryIdx + 1) % categoryCount;
        const nextCategory = CATEGORY_ORDER[nextCategoryIdx];

        return {
          ...state,
          [pressTabType]: {
            currentCategory: isSameCategory ? currentCategory : nextCategory,
            currentItemIdx: isSameCategory ? currentItemIdx + 1 : 0
          }
        };
      }
    }
    default:
      break;
  }
};

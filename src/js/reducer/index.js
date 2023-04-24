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
    case 'initListPage': {
      const { pressTabType, categories } = action.payload;
      return { ...state, [pressTabType]: { currentCategory: categories[0], currentItemIdx: 0 } };
    }
    case 'nextPage': {
      const { pressTabType } = action.payload;

      if (pressTabType === 'all') {
        const { categories, dataCountByCategory } = action.payload;
        const { currentCategory, currentItemIdx } = state[pressTabType];
        const categoryCount = categories.length;

        const isSameCategory = currentItemIdx < dataCountByCategory[currentCategory] - 1;

        const currentCategoryIdx = categories.indexOf(currentCategory);
        const nextCategoryIdx = (currentCategoryIdx + 1) % categoryCount;
        const nextCategory = categories[nextCategoryIdx];

        return {
          ...state,
          [pressTabType]: {
            currentCategory: isSameCategory ? currentCategory : nextCategory,
            currentItemIdx: isSameCategory ? currentItemIdx + 1 : 0
          }
        };
      }
      break;
    }
    case 'beforePage': {
      const { categories, pressTabType } = action.payload;

      if (pressTabType === 'all') {
        const { dataCountByCategory } = action.payload;
        const { currentCategory, currentItemIdx } = state[pressTabType];
        const categoryCount = categories.length;

        const isSameCategory = currentItemIdx > 0;

        const currentCategoryIdx = categories.indexOf(currentCategory);
        const nextCategoryIdx =
          ((currentCategoryIdx === 0 ? categories.length : currentCategoryIdx) - 1) % categoryCount;
        const nextCategory = categories[nextCategoryIdx];

        return {
          ...state,
          [pressTabType]: {
            currentCategory: isSameCategory ? currentCategory : nextCategory,
            currentItemIdx: (isSameCategory ? currentItemIdx : dataCountByCategory[nextCategory]) - 1
          }
        };
      }
      break;
    }
    case 'changeCategory': {
      const { pressTabType, categories, targetCategoryIdx } = action.payload;

      if (pressTabType === 'all') {
        return {
          ...state,
          [pressTabType]: { currentCategory: categories[targetCategoryIdx], currentItemIdx: 0 }
        };
      }
    }
    default:
      break;
  }
};

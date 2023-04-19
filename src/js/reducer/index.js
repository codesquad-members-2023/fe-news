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
      const { subscriptionList } = state;

      const newSubscriptionList = new Set(Array.from(subscriptionList));
      newSubscriptionList.add(action.payload);

      return { ...state, subscriptionList: newSubscriptionList };
    }
    case 'deleteSubscription': {
      const { subscriptionList } = state;

      const newSubscriptionList = new Set(Array.from(subscriptionList));
      newSubscriptionList.delete(action.payload);

      return { ...state, subscriptionList: newSubscriptionList };
    }
    default:
      return state;
  }
};

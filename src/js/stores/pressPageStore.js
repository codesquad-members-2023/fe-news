import Store from '../core/Store.js';

const initialState = {
  page: {
    pressData: [],
    categoryIndex: 0,
    pageIndex: 0,
  }
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRESSDATA':
      state.page.pressData = categoryMap(action.payload);
      return {
        ...state,
      };
    case 'CLICK_CATEGORY':
      return {
        ...state,
      };
    case 'CLICK_PREV':
      state = movePrevPage(state.page, state.page.pressData);
      return {
        ...state,
      };
    case 'CLICK_NEXT':
      state = moveNextPage(state.page, state.page.pressData);
    return {
      ...state,
    };
    case 'RESET_PAGE':
      state.page.categoryIndex = 0;
      state.page.pageIndex = 0;
    return {
      ...state,
    };
    default:
      return state;
  }
};

/**
 * @param {*} media
 * @returns [카테고리 key, 카테고리에 해당하는 배열]
 * ['toteco', Array(82)] ['tvcom', Array(23)] ['it', Array(12)]
 * ['eng', Array(6)] ['sporent', Array(24)] ['magtec', Array(59)] ['local', Array(36)]
 */
const categoryMap = media => {
  const map = new Map();
  media.forEach(data => {
    const category = data["category"];
    if(!map.has(category)) map.set(category, []);
    map.get(category).push(data);
  });
  return [...map];
}

const movePrevPage = (page, pressData) => {
  page.pageIndex--;
  if(page.pageIndex < 0) {
    page.categoryIndex--;
    if(page.categoryIndex < 0) page.categoryIndex = 6;
    page.pageIndex = pressData[page.categoryIndex][1].length - 1;
  }
  return { page };
}

const moveNextPage = (page, pressData) => {
  page.pageIndex++;
  if(page.pageIndex === pressData[page.categoryIndex][1].length - 1) {
    page.categoryIndex++;
    if(page.categoryIndex > 6) page.categoryIndex = 0;
    page.pageIndex = 0;
  }
  return { page };
}

export const PageStore = new Store(initialState, pageReducer);
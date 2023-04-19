import Store from '../core/Store.js';

const initialState = {
  page: {
    pressData: [], //map객체
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
      state.page.categoryIndex = action.payload;
      state.page.pageIndex = 0;
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
 * {"종합/경제" => Array(82)} {"방송/통신" => Array(23)}
 * {"IT" => Array(12)} {"영자지" => Array(6)} {"스포츠/연예" => Array(23)}
 * {"매거진/전문지" => Array(59)} {"지역" => Array(36)}
 */
const categoryMap = media => {
  const map = new Map();
  media.forEach(data => {
    const category = data["category"];
    if(!map.has(category)) map.set(category, []);
    map.get(category).push(data);
  });
  console.log(map);
  return map;
}

const movePrevPage = (page, pressData) => {
  const LAST_CATEGORY = pressData.size - 1;
  page.pageIndex--;
  if(page.pageIndex < 0) {
    page.categoryIndex--;
    if(page.categoryIndex < 0) page.categoryIndex = LAST_CATEGORY;
    page.pageIndex = [...pressData.values()][page.categoryIndex].length - 1;
  }
  return { page };
}

const moveNextPage = (page, pressData) => {
  const LAST_CATEGORY = pressData.size - 1;
  page.pageIndex++;
  if(page.pageIndex === [...pressData.values()][page.categoryIndex].length - 1) {
    page.categoryIndex++;
    if(page.categoryIndex > LAST_CATEGORY) page.categoryIndex = 0;
    page.pageIndex = 0;
  }
  return { page };
}

export const PageStore = new Store(initialState, pageReducer);
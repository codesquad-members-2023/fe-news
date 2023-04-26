const GRID = "grid";
const LIST = "list";

const ALL_PRESSES = "all-press";
const SUBSCRIBED_PRESSES = "subscribed-press";

const URLS = {
  PRESSES_DATA: "http://localhost:5050/presses",
  PRESSES_CATEGORIES: "http://localhost:5050/categories",
};

const GRID_VIEW = {
  START_PAGE: 1,
  PAGE_LIMIT: 4,
  ITEM_LIMIT_PER_PAGE: 24,
};

const LIST_VIEW = {
  START_PAGE: 1,
  PAGE_FLIP_INTERVAL: 20000,
  CURRENT_BACKGROUND_COLOR: "#4362D0",
  BACKGROUND_COLOR_TO_FILL: "#7890E7",
  DIRECTION: "right",
};

const PRESS_STATUS = {
  SUBSCRIBED: "subscribed",
  UNSUBSCRIBED: "unsubscribed",
};

export {
  GRID,
  LIST,
  ALL_PRESSES,
  SUBSCRIBED_PRESSES,
  URLS,
  GRID_VIEW,
  LIST_VIEW,
  PRESS_STATUS,
};

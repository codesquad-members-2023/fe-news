export interface DisplayType {
  currentTab: 'general' | 'custom';
  currentView: 'grid' | 'list';
  page: {
    [key: string]: {
      [key: string]: { currentPage: number; totalPage: number };
    };
  };
  category: {
    [key: string]: {
      [key: string]: { index: number };
    };
  };
}

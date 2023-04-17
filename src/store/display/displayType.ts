export interface DisplayType {
  currentTab: 'general' | 'custom';
  currentView: 'grid' | 'list';
  page: {
    [key: string]: {
      [key: string]: { currentPage: number; totalPage: number };
    };
  };
}

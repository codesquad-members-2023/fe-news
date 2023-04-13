export interface ElementType {
  [key: string]: {
    isActive: boolean;
  };
}

export interface DisplayType {
  tab: ElementType;
  view: ElementType;
  page: {
    [key: string]: {
      [key: string]: { currentPage: number; totalPage: number };
    };
  };
}

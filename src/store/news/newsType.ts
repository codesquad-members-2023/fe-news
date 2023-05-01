export interface NewsType {
  display: DisplayType;
  press: {
    pressList: PressType[];
  };
}

export enum TAB {
  GENERAL = 'general',
  CUSTOM = 'custom',
}

export enum VIEW {
  GRID = 'grid',
  LIST = 'list',
}

export enum CATEGORY {
  GENERAL = '종합/경제',
  BRODCAST = '방송/통신',
  IT = 'IT',
  ENGLISH = '영자지',
  SPORT = '스포츠/연예',
  MAGAZINE = '매거진/전문지',
  REGION = '지역',
}

export interface DisplayType {
  currentTab: TAB;
  currentView: VIEW;
  currentPage: number;
  totalPage: {
    [VIEW.GRID]: {
      [TAB.GENERAL]: number;
      [TAB.CUSTOM]: number;
    };
    [VIEW.LIST]: {
      [TAB.GENERAL]: number;
      [TAB.CUSTOM]: number;
    };
  };
}

export interface PressType {
  pid: string;
  pname: string;
  newMainLogo: string;
  newMainLightLogo: string;
  newMainDarkLogo: string;
  thumbnailValid: boolean;
  valid: boolean;
  isSubscribed: boolean;
}

export type RollingNewsType = {
  title: string;
  link: string;
};

export interface SectionType {
  sectionData: {
    id: string;
    pressId: string;
    lastEdited: Date;
    articles: ArticleInterface[];
    category: string;
    press: PressType;
  };
  tabData: {
    categoryCounts: {
      [CATEGORY.GENERAL]: number;
      [CATEGORY.BRODCAST]: number;
      [CATEGORY.IT]: number;
      [CATEGORY.ENGLISH]: number;
      [CATEGORY.SPORT]: number;
      [CATEGORY.MAGAZINE]: number;
      [CATEGORY.REGION]: number;
    };
    totalNumber: number;
    currentCategoryIndex: number;
  };
}

export interface ArticleInterface {
  id: string;
  title: string;
  img: string;
  link: string;
}

interface newsPropsType {
  state: NewsType;
}

export interface changeTabPropsType extends newsPropsType {
  payload: TAB;
}

export interface changeViewPropsType extends newsPropsType {
  payload: VIEW;
}

export interface changePageNumberPropsType extends newsPropsType {
  type: 'NEXT_PAGE' | 'PREV_PAGE' | 'RESET_PAGE';
}

export interface setCurrentPagePropsType extends newsPropsType {
  payload: {
    view: VIEW;
    tab: TAB;
    currentPage: number;
  };
}

export interface setTotalPagePropsType extends newsPropsType {
  payload: {
    view: VIEW;
    tab: TAB;
    totalPage: number;
  };
}

export interface setPressListPropsType extends newsPropsType {
  payload: {
    pressList: PressType[];
  };
}

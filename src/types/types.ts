export type Props = Record<string, string | number | boolean | object>;
export type State = Record<string, string | number | boolean | object>;
export type Issue = {
  leftRollingData: string[];
  rightRollingData: string[];
};
export type Article = {
  mediaId: number;
  mediaInfo: {
    type: string;
    name: string;
    imgSrc: string;
    modifiedTime: string;
  };
  mainContent: {
    mainImgSrc: string;
    mainTitle: string;
  };
  subContent: {
    subNewsList: string[];
    noticeMessage: string;
  };
};

import { PressType } from '../press/pressType';

type CategoryCountsType = {
  [key: string]: number;
};
export interface SectionInfoType {
  categoryCounts: CategoryCountsType;
  section: SectionType;
  totalNumber: number;
}
export interface SectionType {
  id: string;
  pressId: string;
  lastEdited: Date;
  articles: ArticleInterface[];
  category: string;
  press: PressType;
}

export interface ArticleInterface {
  id: string;
  title: string;
  img: string;
  link: string;
}

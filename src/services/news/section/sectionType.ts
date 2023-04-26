import { NewsType, TAB } from '@store/news/newsType';
import { UserType } from '@store/user/userType';
import { StoreType } from '@utils/redux';

export interface sectionContentsPropsType {
  newsStore: StoreType<NewsType>;
}

export interface getSectionPropsType extends sectionContentsPropsType {
  page?: number;
}

export interface getCustomSectionPropsType extends sectionContentsPropsType {
  userStore: StoreType<UserType>;
  page?: number;
}

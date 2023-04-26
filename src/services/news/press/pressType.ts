import { NewsType, PressType } from '@store/news/newsType';
import { UserType } from '@store/user/userType';
import { StoreType } from '@utils/redux';

export interface pressListContentsPropsType {
  pressList: PressType[];
}

export interface customPressListContentsPropsType {
  newsStore: StoreType<NewsType>;
  userStore: StoreType<UserType>;
}

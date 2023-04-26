import { NewsType } from '@store/news/newsType';
import { UserType } from '@store/user/userType';
import { StoreType } from '@utils/redux';

export interface pressListContentsPropsType {
  newsStore: StoreType<NewsType>;
}

export interface customPressListContentsPropsType {
  newsStore: StoreType<NewsType>;
  userStore: StoreType<UserType>;
}

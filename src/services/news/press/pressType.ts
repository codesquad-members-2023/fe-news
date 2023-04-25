import { NewsType } from '@store/news/newsType';
import { StoreType } from '@utils/redux';

export interface pressListContentsPropsType {
  newsStore: StoreType<NewsType>;
}

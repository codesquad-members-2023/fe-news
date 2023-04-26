import { MAX_ITEM_NUM, TEMP_ID } from '@constant/index';
import { getPressAPI } from '@apis/news';
import { getUser } from '@apis/user';
import {
  customPressListContentsPropsType,
  pressListContentsPropsType,
} from './pressType';
import { VIEW, TAB } from '@store/news/newsType';

export const getPressList = async ({
  newsStore,
}: pressListContentsPropsType) => {
  let pressList = await getPressAPI();
  pressList = pressList.slice(0, MAX_ITEM_NUM * 4);

  return pressList;
};

export const getCustomPressList = async ({
  newsStore,
  userStore,
}: customPressListContentsPropsType) => {
  const pressList = await getPressAPI();
  const subscribingPressIds = userStore.getState().subscribingPressIds;
  const customPressList = subscribingPressIds.reduce(
    (result: any, id: string) => {
      const press = pressList.find((press: any) => {
        return press.pid === id;
      });
      return [...result, press];
    },
    []
  );

  return customPressList;
};

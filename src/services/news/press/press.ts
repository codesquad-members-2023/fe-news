import { MAX_ITEM_NUM, TEMP_ID } from '@constant/index';
import { getPressAPI } from '@apis/news';
import {
  customPressListContentsPropsType,
  pressListContentsPropsType,
} from './pressType';

export const getSlicedPressList = ({
  pressList,
}: pressListContentsPropsType) => {
  return pressList.slice(0, MAX_ITEM_NUM * 4);
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

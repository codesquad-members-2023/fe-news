import { MAX_ITEM_NUM, TEMP_ID } from '@constant/index';
import { getPressAPI } from '@apis/news';
import { getUser } from '@apis/user';
import { pressListContentsPropsType } from './pressType';
import { VIEW, TAB } from '@store/news/newsType';

export const getPressList = async ({
  newsStore,
}: pressListContentsPropsType) => {
  let pressList = await getPressAPI();
  pressList = pressList.slice(0, MAX_ITEM_NUM * 4);
  newsStore.dispatch({
    type: 'SET_TOTAL_PAGE',
    payload: {
      view: VIEW.GRID,
      tab: TAB.GENERAL,
      totalPage: Math.ceil(pressList.length / 24) - 1,
    },
  });

  return pressList;
};

export const getCustomPressList = async ({
  newsStore,
}: pressListContentsPropsType) => {
  const pressList = await getPressAPI();
  const user = await getUser({ id: TEMP_ID });
  const subscribingPressIds = user[0].subscribingPressIds;
  const customPressList = subscribingPressIds.reduce(
    (result: any, id: string) => {
      const press = pressList.find((press: any) => {
        return press.pid === id;
      });
      return [...result, press];
    },
    []
  );
  newsStore.dispatch({
    type: 'SET_TOTAL_PAGE',
    payload: {
      view: VIEW.GRID,
      tab: TAB.CUSTOM,
      totalPage: Math.ceil(customPressList.length / 24) - 1,
    },
  });
  return customPressList;
};

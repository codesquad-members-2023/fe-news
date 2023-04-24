import { MAX_ITEM_NUM, TEMP_ID } from '@constant/index';
import { getPressAPI } from '@apis/news';
import { getUser } from '@apis/user';
import { StroeType } from '@utils/redux';
import { DisplayType } from '@store/display/displayType';
import { PressListType } from '@store/press/pressType';

interface getPressListProps {
  displayStore: StroeType<DisplayType>;
  pressStore: StroeType<PressListType>;
}

interface getCustomPressListProps {
  displayStore: StroeType<DisplayType>;
  pressStore: StroeType<PressListType>;
}

export const getPressList = async ({
  displayStore,
  pressStore,
}: getPressListProps) => {
  let pressList = await getPressAPI();
  pressList = pressList.slice(0, MAX_ITEM_NUM * 4);
  displayStore.dispatch({
    type: 'SET_TOTAL_PAGE',
    payload: {
      view: 'grid',
      tab: 'general',
      totalPage: Math.ceil(pressList.length / 24) - 1,
    },
  });
  pressStore.dispatch({
    type: 'SET_PRESS_LIST',
    payload: { pressList },
  });
};

export const getCustomPressList = async ({
  displayStore,
  pressStore,
}: getCustomPressListProps) => {
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
  displayStore.dispatch({
    type: 'SET_TOTAL_PAGE',
    payload: {
      view: 'grid',
      tab: 'custom',
      totalPage: Math.ceil(customPressList.length / 24) - 1,
    },
  });
  pressStore.dispatch({
    type: 'SET_CUSTOM_PRESS_LIST',
    payload: { pressList: customPressList },
  });
};

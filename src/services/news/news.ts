import { PressType } from '@store/news/newsType';

export const filterSusbscribedPress = ({
  pressList,
  subscribingPressIds,
}: {
  pressList: PressType[];
  subscribingPressIds: string[];
}) =>
  pressList.filter((list: PressType) => subscribingPressIds.includes(list.pid));

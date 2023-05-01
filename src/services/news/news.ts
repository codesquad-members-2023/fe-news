import { PressType } from '@store/news/newsType';

export const filterSusbscribedPress = ({
  pressList,
  subscribingPressIds,
}: {
  pressList: PressType[];
  subscribingPressIds: string[];
}) =>
  subscribingPressIds.map((id: string) =>
    pressList.find((press: PressType) => press.pid === id)
  );

import { KR_DAYS } from '@src/constants/constants.js';

export const getKrDate = (locale: string, todayDate: Date) => {
  const date = todayDate;
  const localeDate = date.toLocaleDateString(locale);
  const day = date.getDay();
  return `${localeDate} ${KR_DAYS[day]}요일`;
};

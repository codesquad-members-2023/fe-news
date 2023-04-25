import { getCustomSectionAPI, getSectionAPI } from '@apis/news';
import { parseQuotationMarks } from '@utils/parser';
import { getCustomSectionPropsType, getSectionPropsType } from './sectionType';
import { ArticleInterface, SectionType, TAB, VIEW } from '@store/news/newsType';

export const getSection = async ({
  newsStore,
  page = 0,
}: getSectionPropsType) => {
  const section: SectionType = await getSectionAPI({ page });
  section.sectionData.articles.forEach((article: ArticleInterface) => {
    article.title = parseQuotationMarks(article.title);
  });
  newsStore.dispatch({
    type: 'SET_TOTAL_PAGE',
    payload: {
      view: VIEW.LIST,
      tab: TAB.GENERAL,
      totalPage: section.tabData.totalNumber,
    },
  });
  return section;
};

export const getCustomSection = async ({
  newsStore,
  userStore,
  page = 0,
}: getCustomSectionPropsType) => {
  const subscribingPressIds = userStore.getState().subscribingPressIds;
  const noSubscribe = subscribingPressIds.length === 0;
  if (noSubscribe) return null;
  const pressId = subscribingPressIds[page];
  const section = await getCustomSectionAPI({ pressId });
  section.sectionData.articles.forEach((article: ArticleInterface) => {
    article.title = parseQuotationMarks(article.title);
  });
  newsStore.dispatch({
    type: 'SET_TOTAL_PAGE',
    payload: {
      view: VIEW.LIST,
      tab: TAB.CUSTOM,
      totalPage: userStore.getState().subscribingPressIds.length,
    },
  });
  return section;
};

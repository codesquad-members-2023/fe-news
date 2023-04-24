import { getCustomSectionAPI, getSectionAPI } from '@apis/news';
import { ArticleInterface } from 'server/schemas';
import { parseQuotationMarks } from '@utils/parser';
import { getCustomSectionPropsType, getSectionPropsType } from './sectionType';

export const getSection = async ({ newsStore, page }: getSectionPropsType) => {
  const section = await getSectionAPI({ page });
  newsStore.dispatch({
    type: 'SET_SECTION',
    payload: section,
  });
  newsStore
    .getState()
    .section.section.articles.forEach((article: ArticleInterface) => {
      article.title = parseQuotationMarks(article.title);
    });
  newsStore.dispatch({
    type: 'SET_TOTAL_PAGE',
    payload: {
      view: 'list',
      tab: 'general',
      totalPage: newsStore.getState().section.totalNumber - 1,
    },
  });
  newsStore.dispatch({ type: 'SET_SECTION', payload: section });
};

export const getCustomSection = async ({
  newsStore,
  userStore,
  page = 0,
}: getCustomSectionPropsType) => {
  if (userStore.getState().subscribingPressId.length === page) {
    const pressId = userStore.getState().subscribingPressId[page];
    const section = await getCustomSectionAPI({ pressId });
    newsStore.dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: {
        view: 'list',
        tab: 'custom',
        currentPage: 0,
      },
    });
    newsStore.dispatch({
      type: 'SET_SECTION',
      payload: section,
    });
  } else {
    const pressId = userStore.getState().subscribingPressId[page];
    const section = await getCustomSectionAPI({ pressId });
    newsStore.dispatch({
      type: 'SET_SECTION',
      payload: section,
    });
  }

  const section = newsStore.getState().section.section;
  section.articles.forEach((article: ArticleInterface) => {
    article.title = parseQuotationMarks(article.title);
  });
  newsStore.dispatch({
    type: 'SET_TOTAL_PAGE',
    payload: {
      view: 'list',
      tab: 'custom',
      totalPage: userStore.getState().subscribingPressId.length - 1,
    },
  });
  newsStore.dispatch({ type: 'SET_SECTION', payload: section });
};

import { StroeType } from '@utils/redux';
import { DisplayType } from '@store/display/displayType';
import { SectionInfoType } from '@store/section/sectionType';
import { getCustomSectionAPI, getSectionAPI } from '@apis/news';
import { ArticleInterface } from 'server/schemas';
import { parseQuotationMarks } from '@utils/parser';
import { UserType } from '@store/user/userType';

export const getSection = async ({
  sectionStore,
  displayStore,
  page,
}: {
  sectionStore: StroeType<SectionInfoType>;
  displayStore: StroeType<DisplayType>;
  page: number;
}) => {
  const section = await getSectionAPI({ page });
  sectionStore.dispatch({
    type: 'SET_SECTION',
    payload: section,
  });
  sectionStore
    .getState()
    .section.articles.forEach((article: ArticleInterface) => {
      article.title = parseQuotationMarks(article.title);
    });
  displayStore.dispatch({
    type: 'SET_TOTAL_PAGE',
    payload: {
      view: 'list',
      tab: 'general',
      totalPage: sectionStore.getState().totalNumber - 1,
    },
  });
  displayStore.dispatch({
    type: 'SET_CATEGORY_INDEX',
    payload: {
      view: 'list',
      tab: 'general',
      index: sectionStore.getState().currentCategoryIndex,
    },
  });
  sectionStore.dispatch({ type: 'SET_SECTION', payload: section });
};

export const getCustomSection = async ({
  userStore,
  displayStore,
  sectionStore,
  page = 0,
}: {
  userStore: StroeType<UserType>;
  displayStore: StroeType<DisplayType>;
  sectionStore: StroeType<SectionInfoType>;
  page: number;
}) => {
  if (userStore.getState().subscribingPress.length === page) {
    const pressId = userStore.getState().subscribingPress[page];
    const section = await getCustomSectionAPI({ pressId });
    displayStore.dispatch({
      type: 'SET_CURRENT_PAGE',
      payload: {
        view: 'list',
        tab: 'custom',
        currentPage: 0,
      },
    });
    sectionStore.dispatch({
      type: 'SET_SECTION',
      payload: section,
    });
  } else {
    const pressId = userStore.getState().subscribingPress[page];
    const section = await getCustomSectionAPI({ pressId });
    sectionStore.dispatch({
      type: 'SET_SECTION',
      payload: section,
    });
  }

  const section = sectionStore.getState();
  section.section.articles.forEach((article: ArticleInterface) => {
    article.title = parseQuotationMarks(article.title);
  });
  displayStore.dispatch({
    type: 'SET_TOTAL_PAGE',
    payload: {
      view: 'list',
      tab: 'custom',
      totalPage: userStore.getState().subscribingPress.length - 1,
    },
  });
  sectionStore.dispatch({ type: 'SET_SECTION', payload: section });
};

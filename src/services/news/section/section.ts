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
  return section;
};

export const getCustomSection = async ({
  pressId,
}: getCustomSectionPropsType) => {
  const section = await getCustomSectionAPI({ pressId });
  section.sectionData.articles.forEach((article: ArticleInterface) => {
    article.title = parseQuotationMarks(article.title);
  });
  return section;
};

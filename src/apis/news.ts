import customFetch from './index';
import store from '@store/index';

export const getNews = async () => {
  const path = '/rolling-news';
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

interface getPressProps {
  page: number;
}

interface getSectionProps {
  page: number;
}

export const getPress = async () => {
  const path = `/press`;
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

export const getSection = async ({ page }: getSectionProps) => {
  const path = `/section?page=${page}`;
  const method = 'GET';
  const data = await customFetch({ path, method });
  store.section.dispatch({ type: 'CHANGE_SECTION', payload: data });
  const section = store.section.getState();
  return section;
};

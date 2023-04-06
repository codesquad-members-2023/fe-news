import customFetch from './index';

export const getNews = async () => {
  const path = '/rolling-news';
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

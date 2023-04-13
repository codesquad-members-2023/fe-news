import customFetch from './index';

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
  page: string;
}

export const getPress = async ({ page }: getPressProps) => {
  // const path = `/press?page=${page}`;
  const path = `/press`;
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

export const getSection = async ({ page }: getSectionProps) => {
  const path = `/section?page=${page}`;
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

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
  pressId: string;
}

export const getPress = async ({ page }: getPressProps) => {
  // const path = `/press?page=${page}`;
  const path = `/press`;
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

export const getSection = async ({ pressId }: getSectionProps) => {
  const path = `/section?pressId=${pressId}`;
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

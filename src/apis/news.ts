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

interface getCustomSectionProps {
  pressId: string;
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
  const section = await customFetch({ path, method });
  return section;
};

export const getCustomSection = async ({ pressId }: getCustomSectionProps) => {
  const path = `/custom-section?pressId=${pressId}`;
  const method = 'GET';
  const section = await customFetch({ path, method });
  return section;
};

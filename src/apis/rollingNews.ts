import customFetch from './index';

export const getRollingNewsAPI = async () => {
  const path = `/rolling-news`;
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

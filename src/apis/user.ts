import customFetch from './index';

interface getUserProps {
  id: string;
}

export const getUser = async ({ id }: getUserProps) => {
  const path = `/user?id=${id}`;
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

interface subscribeProps {
  id: string;
  pressId: string;
}

export const subscribe = async ({ id, pressId }: subscribeProps) => {
  const path = `/press?id=${id}&pressId=${pressId}`;
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

interface unsubscribeProps {
  id: string;
  pressId: string;
}

export const unsubscribe = async ({ id, pressId }: unsubscribeProps) => {
  const path = `/press?id=${id}&pressId=${pressId}`;
  const method = 'GET';
  const data = await customFetch({ path, method });
  return data;
};

import { TEMP_ID } from '@constant/index';
import customFetch from './index';
import store from '@store/index';

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

export const subscribeAPI = async ({ pressId }: subscribeProps) => {
  const path = `/subscribe?id=${TEMP_ID}&pressId=${pressId}`;
  const method = 'PATCH';
  const data = await customFetch({ path, method });
  return data;
};

interface unsubscribeProps {
  id: string;
  pressId: string;
}

export const unsubscribeAPI = async ({ pressId }: unsubscribeProps) => {
  const path = `/unsubscribe?id=${TEMP_ID}&pressId=${pressId}`;
  const method = 'PATCH';
  const data = await customFetch({ path, method });
  return data;
};

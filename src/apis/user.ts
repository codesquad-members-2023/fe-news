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

const TEST_USER_ID = 'realsnoopso';

export const subscribe = async ({ pressId }: subscribeProps) => {
  console.log('subscribe!!!!');
  const path = `/subscribe?id=${TEST_USER_ID}&pressId=${pressId}`;
  const method = 'PATCH';
  const data = await customFetch({ path, method });
  const user = await getUser({ id: TEST_USER_ID });
  store.user.dispatch({ type: 'SET_USER', payload: user });

  return data;
};

interface unsubscribeProps {
  id: string;
  pressId: string;
}

export const unsubscribe = async ({ pressId }: unsubscribeProps) => {
  console.log('unsubscribe!!!!');
  const path = `/unsubscribe?id=${TEST_USER_ID}&pressId=${pressId}`;
  const method = 'PATCH';
  const data = await customFetch({ path, method });
  const user = await getUser({ id: TEST_USER_ID });
  store.user.dispatch({ type: 'SET_USER', payload: user });
  return data;
};

const URL = (import.meta as any).env.VITE_DEFAULT_URL;

interface customFetchProp {
  path: string;
  method: string;
  body?: BodyInit;
}

const customFetch = async ({ path, method, body }: customFetchProp) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const data = await fetch(URL + path, {
      method,
      body,
      headers,
    });
    if (!data.ok) {
      throw Error(data.statusText);
    }
    const result = await data.json();
    if (!result) {
      throw Error('No data');
    }
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default customFetch;

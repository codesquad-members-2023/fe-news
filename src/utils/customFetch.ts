export const customGet = async (url: string, method = 'GET'): Promise<any> => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    console.log('Request successful!');
    return response;
  } catch (error) {
    throw Error((error as Error).message);
  }
};

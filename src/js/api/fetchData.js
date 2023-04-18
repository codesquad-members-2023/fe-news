const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const URL = 'http://localhost:3001';

const [headLineData, mediaData] = await Promise.all([
  fetchData(`${URL}/headline`),
  fetchData(`${URL}/media`)]);

export { headLineData, mediaData };

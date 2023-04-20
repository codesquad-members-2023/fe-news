export const dataRequestToAPI = async (URL) => {
  try {
    const response = await fetch(URL);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(`fetch 에러! ${error}`);
  }
};

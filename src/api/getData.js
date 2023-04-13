export const getHeadLine = async (URL) => {
  try {
    const response = await fetch(URL);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(`fetch 에러! ${error}`);
  }
};

export const getJournal = (URL) => {
  return fetch(URL)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch((error) => console.error(`fetch 에러! ${error}`));
};

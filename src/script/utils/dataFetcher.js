import { URL } from '../constants/constants.js';

export const fetchData = async (urlList) => {
  try {
    const responseList = await Promise.all(urlList.map((resourcePath) => fetch(`${URL}/${resourcePath}`)));
    const dataList = await Promise.all(responseList.map((response) => response.json()));

    return dataList;
  } catch (error) {
    console.error(error);

    return error;
  }
};


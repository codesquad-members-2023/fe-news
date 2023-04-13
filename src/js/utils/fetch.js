import { API_URL } from '../core/constants.js';

const fetchData = async (...url) => {
  const requests = [...url].map(url => fetch(url));
  const requestObject = await Promise.all(requests);
  const jsonObject =  await Promise.all(requestObject.map(obj => obj.json()));
  return jsonObject;
}

const getData = async () => {
  const responseData = await fetchData(API_URL['rolling'], API_URL['media']);
  return responseData;
}

const responseData = getData();
export default responseData;
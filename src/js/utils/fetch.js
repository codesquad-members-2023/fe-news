import { API_URL } from '../core/constants.js';

const fetchAll = async (...url) => {
  const requests = [...url].map(url => fetch(url));
  const requestObject = await Promise.all(requests);
  const jsonObject =  await Promise.all(requestObject.map(obj => obj.json()));
  return jsonObject;
}

const fetchData = async () => {
  const responseData = await fetchAll(API_URL['rolling'], API_URL['media']);
  return responseData;
}

const responseData = fetchData();
export default responseData;
const fetchData = async (...url) => {
  const requests = [...url].map(url => fetch(url));
  const requestObject = await Promise.all(requests);
  const jsonObject =  await Promise.all(requestObject.map(obj => obj.json()));
  return jsonObject;
}

export default fetchData;
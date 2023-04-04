async function getMatchData(keyword) {
  let result;
  await fetch('http://localhost:3001/media')
    .then((response) => response.json())
    .then((data) => {
      data = data.data;
      result = data.find((item) => item.mediaId === 100);
    })
    .catch((error) => console.error(`error: ${error.message}`));
  console.log(result);
  return result;
}

getMatchData();

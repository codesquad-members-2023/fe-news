function getHeadLineData() {
  fetch('http://localhost:3001/headLine')
    .then((response) => response.json())
    .then((data) => {
      const leftData = data.leftData;
      const rightData = data.rightData;
      return data;
    })
    .catch((error) => console.error(error));
}

getHeadLineData();
export { data };

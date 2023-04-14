const headlinesUl = document.querySelector('.type02');
const headlinesArray = Array.from(headlinesUl.querySelectorAll('li > a > strong'));
const resultObj = headlinesArray.reduce((acc, cur, index) => {
  const obj = { id: `${index + 1}`, title: cur.innerHTML };
  acc.push(obj);
  return acc;
}, []);

console.log(resultObj);

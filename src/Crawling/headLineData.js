// 네이버 콘솔에서 데이터를 가져오는 코드

const crawlingHeadLine = () => {
  const result = [];
  let id = 1;

  const headLineList = document.querySelectorAll(".content .type02 a strong");

  headLineList.forEach((listEl) => {
    const obj = {
      headLineId: id,
      headLineTitle: listEl.innerText,
    };

    result.push(obj);
    id++;
  });

  return result;
};

crawlingHeadLine();

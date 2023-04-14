// 네이버 콘솔에서 데이터를 가져오는 코드

const crawlingJournalList = () => {
  const result = [];
  let id = 1;

  const journalList = document.querySelectorAll(".thumb img");

  journalList.forEach((listEl) => {
    const obj = {
      journalId: id,
      journalAlt: listEl.alt,
      journalSrc: listEl.currentSrc,
    };

    result.push(obj);
    id++;
  });

  return result;
};

crawlingJournalList();

export class Journal {
  constructor(jsonData) {
    this.journalList = jsonData;
  }

  makeJournal() {
    return this.journalList.reduce((acc, cur) => {
      const journalDiv = document.createElement("div");
      journalDiv.classList.add("journal-item");
      journalDiv.innerHTML = `<img src="${cur.journalSrc}" alt="${cur.journalAlt}">`;
      acc.push(journalDiv);
      //   console.log(acc);
      return acc;
    }, []);
  }
}

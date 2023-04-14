export class Journal {
  constructor(jsonData) {
    this.journalList = jsonData;
  }

  // (Refactor) 콜백함수와 이벤트를 분리해서 더 작게 만들어 보기
  getJournalItem() {
    const journalItems = this.journalList.map((journalData) => {
      const journalItem = document.createElement("div");
      journalItem.classList.add("journal-item");

      const showDiv = document.createElement("div");
      showDiv.classList.add("journal-item_show");
      journalItem.appendChild(showDiv);
      showDiv.innerHTML = `<img src="${journalData.journalSrc}" alt="${journalData.journalAlt}">`;
      showDiv.style.display = "flex";

      const hoverDiv = document.createElement("div");
      hoverDiv.classList.add("journal-item_hover");
      hoverDiv.innerHTML = `
        <button class="subscribe-btn">구독</button>
        <button class="unsubscribe-btn">해지</button>`;
      hoverDiv.style.display = "none";

      journalItem.appendChild(hoverDiv);

      journalItem.addEventListener("mouseover", () => {
        showDiv.style.display = "none";
        hoverDiv.style.display = "flex";
      });

      journalItem.addEventListener("mouseout", () => {
        hoverDiv.style.display = "none";
        showDiv.style.display = "flex";
      });

      return journalItem;
    });
    return journalItems;
  }
}

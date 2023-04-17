export class Journal {
  constructor(journalData) {
    this.journalData = journalData;
    this.element = document.createElement("div");
    this.element.classList.add("journal-item");
    this.render();
  }

  getJournalItems() {
    this.showDiv = document.createElement("div");
    this.showDiv.classList.add("journal-item_show");
    this.element.appendChild(this.showDiv);
    this.showDiv.innerHTML = `<img src="${this.journalData.journalSrc}" alt="${this.journalData.journalAlt}">`;
    this.showDiv.style.display = "flex";

    this.hoverDiv = document.createElement("div");
    this.hoverDiv.classList.add("journal-item_hover");
    this.hoverDiv.innerHTML = `
        <button class="subscribe-btn">구독</button>
        <button class="unsubscribe-btn">해지</button>`;
    this.hoverDiv.style.display = "none";

    this.element.appendChild(this.hoverDiv);
    return this.element;
  }

  addEvent() {
    this.element.addEventListener("mouseover", () => {
      this.showDiv.style.display = "none";
      this.hoverDiv.style.display = "flex";
    });

    this.element.addEventListener("mouseout", () => {
      this.hoverDiv.style.display = "none";
      this.showDiv.style.display = "flex";
    });
  }

  addSubscribeEvent() {}

  render() {
    this.getJournalItems();
    this.addEvent();
  }
}

export class Journal {
  constructor(journalData, store) {
    this.journalHeaderStore = store;
    this.journalData = journalData;
    this.element = document.createElement("div");
    this.element.classList.add("journal-item");
    this.render();
  }

  getJournalItems() {
    const showDiv = document.createElement("div");
    showDiv.classList.add("journal-item_show");
    this.element.appendChild(showDiv);
    showDiv.innerHTML = `<img src="${this.journalData.mediaInfo.imgSrc}" 
                         alt="${this.journalData.mediaInfo.name}">`;
    showDiv.style.display = "flex";

    const hoverDiv = document.createElement("div");
    hoverDiv.classList.add("journal-item_hover");

    const subscribeBtn = document.createElement("button");
    subscribeBtn.classList.add("subscribe-btn");
    subscribeBtn.textContent = "구독";

    const unSubscribeBtn = document.createElement("button");
    unSubscribeBtn.classList.add("unsubscribe-btn");
    unSubscribeBtn.textContent = "해지";

    hoverDiv.appendChild(subscribeBtn);
    hoverDiv.appendChild(unSubscribeBtn);

    hoverDiv.style.display = "none";

    this.element.appendChild(hoverDiv);

    return { showDiv, hoverDiv, subscribeBtn, unSubscribeBtn };
  }

  addEvent(showDiv, hoverDiv) {
    this.element.addEventListener("mouseover", () => {
      showDiv.style.display = "none";
      hoverDiv.style.display = "flex";
    });

    this.element.addEventListener("mouseout", () => {
      hoverDiv.style.display = "none";
      showDiv.style.display = "flex";
    });
  }

  addSubscribeEvent(subscribeBtn, unSubscribeBtn, showDiv, hoverDiv) {
    subscribeBtn.addEventListener("click", () => {
      this.journalHeaderStore.addSubscribe(this);
    });

    unSubscribeBtn.addEventListener("click", () => {
      this.journalHeaderStore.deleteSubscribe(this);
      hoverDiv.style.display = "none";
      showDiv.style.display = "flex";
    });
  }

  render() {
    const { showDiv, hoverDiv, subscribeBtn, unSubscribeBtn } =
      this.getJournalItems();
    this.addEvent(showDiv, hoverDiv);
    this.addSubscribeEvent(subscribeBtn, unSubscribeBtn, showDiv, hoverDiv);
  }
}

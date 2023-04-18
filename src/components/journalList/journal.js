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
    showDiv.innerHTML = `<img src="${this.journalData.journalSrc}" alt="${this.journalData.journalAlt}">`;
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

  addSubscribeEvent(subscribeBtn, unSubscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      this.journalHeaderStore.addSubscribe(this);
    });

    unSubscribeBtn.addEventListener("click", () => {
      this.journalHeaderStore.deleteSubscribe(this);
    });
  }

  render() {
    const { showDiv, hoverDiv, subscribeBtn, unSubscribeBtn } =
      this.getJournalItems();
    this.addEvent(showDiv, hoverDiv);
    this.addSubscribeEvent(subscribeBtn, unSubscribeBtn);
  }
}

// export class Journal {
//   constructor(journalData, store) {
//     this.journalHeaderStore = store;
//     this.journalData = journalData;
//     this.element = document.createElement("div");
//     this.element.classList.add("journal-item");
//     this.subscribeBtn;
//     this.unSubscribeBtn;
//     this.render();
//   }

//   getJournalItems() {
//     this.showDiv = document.createElement("div");
//     this.showDiv.classList.add("journal-item_show");
//     this.element.appendChild(this.showDiv);
//     this.showDiv.innerHTML = `<img src="${this.journalData.journalSrc}" alt="${this.journalData.journalAlt}">`;
//     this.showDiv.style.display = "flex";

//     this.hoverDiv = document.createElement("div");
//     this.hoverDiv.classList.add("journal-item_hover");
//     this.hoverDiv.innerHTML = `
//         <button class="subscribe-btn">구독</button>
//         <button class="unsubscribe-btn">해지</button>`;
//     this.hoverDiv.style.display = "none";

//     this.element.appendChild(this.hoverDiv);
//     return this.element;
//   }

//   addEvent() {
//     this.element.addEventListener("mouseover", () => {
//       this.showDiv.style.display = "none";
//       this.hoverDiv.style.display = "flex";
//     });

//     this.element.addEventListener("mouseout", () => {
//       this.hoverDiv.style.display = "none";
//       this.showDiv.style.display = "flex";
//     });
//   }

//   addSubscribeEvent() {
//     this.subscribeBtn.addEventListener("click", () => {
//       this.journalHeaderStore.addSubscribe(this.element);
//     });

//     this.unSubscribeBtn.addEventListener("click", () => {
//       this.journalHeaderStore.deleteSubscribe(this.element);
//     });
//   }

//   render() {
//     this.getJournalItems();
//     this.addEvent();
//     this.subscribeBtn = this.element.querySelector(".subscribe-btn");
//     this.unSubscribeBtn =
//       this.element.document.querySelector(".unsubscribe-btn");
//     this.addSubscribeEvent();
//   }
// }

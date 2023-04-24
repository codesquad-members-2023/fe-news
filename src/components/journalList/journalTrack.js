export class Track {
  constructor(journalTrackStore, journalDetailStore) {
    this.store = journalTrackStore;
    this.detailStore = journalDetailStore;
    this.element = document.createElement("div");
    this.element.classList.add("journal-track");
    this.prevBtn;
    this.nextBtn;
    this.currentPage = 0;
    this.render();
  }

  beElement() {
    const journalTrack = `<div class="journal-container"></div>`;
    this.element.innerHTML = journalTrack;
  }

  addButton() {
    const leftBtn = document.createElement("button");
    leftBtn.classList.add("track-btn_left");
    const leftImg = document.createElement("img");
    leftImg.src = "src/assets/icons/LeftButton.svg";
    leftBtn.appendChild(leftImg);

    const rightBtn = document.createElement("button");
    rightBtn.classList.add("track-btn_right");
    const rightImg = document.createElement("img");
    rightImg.src = "src/assets/icons/RightButton.svg";
    rightBtn.appendChild(rightImg);

    this.element.appendChild(leftBtn);
    this.element.appendChild(rightBtn);
  }

  moveTrack(direction) {
    this.container = this.element.querySelector(".journal-container");
    this.batchSize = this.store.getBatchSize();
    const WIDTH_PER_PAGE = 900;
    const FIRST_PAGE = 0;
    const LAST_PAGE = this.store.getBatchSize() - 1;

    if (direction === "left") {
      this.currentPage--;
      this.countCurrentPage();
    } else if (direction === "right") {
      this.currentPage++;
      this.countCurrentPage();
    }

    const currentPosition = this.currentPage * -WIDTH_PER_PAGE;
    this.container.style.transform = `translateX(${currentPosition}px)`;

    if (LAST_PAGE === FIRST_PAGE) {
      this.prevBtn.classList.add("display-none");
      this.nextBtn.classList.add("display-none");
    } else {
      const isOnFirstPage = this.currentPage === FIRST_PAGE;
      const isOnLastPage = this.currentPage === LAST_PAGE;
      this.prevBtn.classList.toggle("display-none", isOnFirstPage);
      this.nextBtn.classList.toggle("display-none", isOnLastPage);
      this.prevBtn.classList.toggle("display-block", !isOnFirstPage);
      this.nextBtn.classList.toggle("display-block", !isOnLastPage);
    }
  }

  addEvent() {
    this.batchSize = this.store.getBatchSize();
    this.prevBtn = this.element.querySelector(".track-btn_left");
    this.nextBtn = this.element.querySelector(".track-btn_right");

    if (this.batchSize === 1) {
      this.prevBtn.classList.add("display-none");
      this.nextBtn.classList.add("display-none");
    }

    this.prevBtn.classList.add("display-none");

    this.prevBtn.addEventListener("click", () => this.moveTrack("left"));
    this.nextBtn.addEventListener("click", () => this.moveTrack("right"));
  }

  getDetailNavHTML() {
    const detailNavDiv = document.createElement("nav");
    detailNavDiv.classList.add("detail-type-bar");

    const detailNavHTML = `
    <div class="navType">
      <span>종합/경제</span>
    </div>
    <div class="navType">
      <span>방송/통신</span>
    </div>
    <div class="navType">
      <span>IT</span>
    </div>
    <div class="navType">
      <span>영자지</span>
    </div>
    <div class="navType">
      <span>스포츠/연예</span>
    </div>
    <div class="navType">
      <span>매거진/전문지</span>
    </div>
    <div class="navType">
      <span>지역</span>
    </div>`;

    detailNavDiv.innerHTML = detailNavHTML;
    const journalContainer = document.querySelector(".journal-container");

    this.element.insertBefore(detailNavDiv, journalContainer);
    this.countCurrentPage();
  }

  countCurrentPage() {
    const typeList = [
      ...document.querySelectorAll(".navType span:first-child"),
    ];

    typeList.forEach((type) => {
      if (type.innerText === this.detailStore.currentJournalType) {
        const typePage = `<span class="type-page">${this.currentPage + 1} / ${
          this.detailStore.getDetailListAll().length
        }</span>`;

        const typePageElement = type.parentNode.querySelector(".type-page");
        if (!typePageElement) {
          type.parentNode.classList.add("hover-color");
          type.parentNode.insertAdjacentHTML("beforeend", typePage);
        } else {
          typePageElement.outerHTML = typePage;
        }
      }
    });
  }

  addDetailNavEvent() {
    const detailNav = document.querySelector(".detail-type-bar");

    detailNav.addEventListener("click", (event) => {
      const eventTarget = event.target.closest("span:first-child");

      if (!eventTarget) return;

      const chosenJournalType = eventTarget.innerText;

      this.detailStore.setCurrentJournalType(chosenJournalType);
    });
  }

  render() {
    this.currentPage = 0;
    this.beElement();
  }
}

export class Track {
  constructor(journalTrackStore) {
    this.store = journalTrackStore;
    this.element = document.createElement("div");
    this.element.classList.add("journal-track");
    this.render();
    this.container;
    this.prevBtn;
    this.nextBtn;
    this.currentPage = 0;
    this.batchSize;
  }

  beElement() {
    const journalTrack = `
    <button class="track-btn">
    <img src="src/assets/icons/LeftButton.svg" /></button>
    <button class="track-btn">
    <img src="src/assets/icons/RightButton.svg" /></button>
    <div class="journal-container"></div>
    </div>`;
    this.element.innerHTML = journalTrack;
  }

  moveTrack(direction) {
    const WIDTH_PER_PAGE = 900;
    const FIRST_PAGE = 0;

    this.batchSize = this.store.getBatchSize();
    const LAST_PAGE = this.batchSize - 1;

    if (direction === "left") {
      this.currentPage--;
    } else if (direction === "right") {
      this.currentPage++;
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

    if (this.batchSize === 1) {
      this.prevBtn.classList.add("display-none");
      this.nextBtn.classList.add("display-none");
    }

    this.prevBtn.classList.add("display-none");
    this.prevBtn.addEventListener("click", this.moveTrack.bind(this, "left"));
    this.nextBtn.addEventListener("click", this.moveTrack.bind(this, "right"));
  }

  render() {
    this.beElement();
    this.container = this.element.querySelector(".journal-container");

    this.prevBtn = this.element.querySelector(".track-btn:first-child");
    this.nextBtn = this.element.querySelector(".track-btn:nth-child(2)");
    this.addEvent();
  }
}

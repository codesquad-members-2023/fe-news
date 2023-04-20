export class Track {
  constructor(journalTrackStore) {
    this.store = journalTrackStore;
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
    <div class="hover-color">
      <span>종합/경제</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>방송/통신</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>IT</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>영자지</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>스포츠/연예</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>메거진/전문지</span>
      <span>1 / 81</span>
    </div>
    <div>
      <span>지역</span>
      <span>1 / 81</span>
    </div>`;

    detailNavDiv.innerHTML = detailNavHTML;
    const journaContainer = document.querySelector(".journal-container");

    this.element.insertBefore(detailNavDiv, journaContainer);
  }

  render() {
    this.currentPage = 0;
    this.beElement();
  }
}

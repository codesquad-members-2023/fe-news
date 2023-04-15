export function Carousel(toApplyEl) {
  this.element = document.createElement("div");
  this.element.classList.add("journal-carousel");
  this.render();
  this.container;
  this.leftBtn;
  this.rightBtn;
  this.page = 0;
}

Carousel.prototype.beElement = function () {
  const journalCarousel = `
    <button class="journal-carousel-btn">
    <img src="src/assets/icons/LeftButton.svg" /></button>
    <button class="journal-carousel-btn">
    <img src="src/assets/icons/RightButton.svg" /></button>
    <div class="journal-container"></div>
  </div>`;

  this.element.innerHTML = journalCarousel;
};

Carousel.prototype.moveCarousel = function (direction) {
  const WIDTH_PER_PAGE = 900;
  const FIRST_PAGE = 0;
  const LAST_PAGE = 3;

  if (direction === "left") {
    this.page--;
  } else if (direction === "right") {
    this.page++;
  }

  const currentPosition = this.page * -WIDTH_PER_PAGE;
  this.container.style.transform = `translateX(${currentPosition}px)`;

  const isOnFirstPage = this.page === FIRST_PAGE;
  const isOnLastPage = this.page === LAST_PAGE;
  this.leftBtn.classList.toggle("display-none", isOnFirstPage);
  this.rightBtn.classList.toggle("display-none", isOnLastPage);
  this.leftBtn.classList.toggle("display-block", !isOnFirstPage);
  this.rightBtn.classList.toggle("display-block", !isOnLastPage);
};

Carousel.prototype.addEvent = function () {
  this.leftBtn.classList.add("display-none");

  this.leftBtn.addEventListener("click", this.moveCarousel.bind(this, "left"));
  this.rightBtn.addEventListener(
    "click",
    this.moveCarousel.bind(this, "right")
  );
};

Carousel.prototype.render = function () {
  this.beElement();
  this.leftBtn = this.element.querySelector(
    ".journal-carousel-btn:first-child"
  );
  this.rightBtn = this.element.querySelector(
    ".journal-carousel-btn:nth-child(2)"
  );
  this.container = this.element.querySelector(".journal-container");
  this.addEvent();
};

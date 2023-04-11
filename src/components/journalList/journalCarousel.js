export function Carousel() {
  this.container;
  this.leftBtn;
  this.rightBtn;
  this.page = 0;
}

Carousel.prototype.beElement = function () {
  const journalCarousel = `<div class="journal-carousel">
    <button class="journal-carousel-btn">
    <img src="src/assets/icons/LeftButton.svg" /></button>
    <button class="journal-carousel-btn">
    <img src="src/assets/icons/RightButton.svg" /></button>
    <div class="journal-container"></div>
  </div>`;
  return journalCarousel;
};

Carousel.prototype.moveCarousel = function (direction) {
  const WIDTH_PER_PAGE = 900;
  const FIRST_PAGE = 0;
  const LAST_PAGE = 3;

  this.container = document.querySelector(".journal-container");
  if (direction === "left") {
    this.page--;
  } else if (direction === "right") {
    this.page++;
  }

  const currentPosition = this.page * -WIDTH_PER_PAGE;
  this.container.style.transform = `translateX(${currentPosition}px)`;

  if (this.page === FIRST_PAGE) {
    this.leftBtn.style.display = "none";
  } else if (this.page === LAST_PAGE) {
    this.rightBtn.style.display = "none";
  } else {
    this.leftBtn.style.display = "block";
    this.rightBtn.style.display = "block";
  }
};

Carousel.prototype.addEvent = function () {
  const journalCarousel = document.querySelector(".journal-carousel");
  this.container = journalCarousel.querySelector(".journal-container");
  this.leftBtn = journalCarousel.querySelector(
    ".journal-carousel-btn:first-child"
  );
  this.rightBtn = journalCarousel.querySelector(
    ".journal-carousel-btn:nth-child(2)"
  );

  this.leftBtn.style.display = "none";

  this.leftBtn.addEventListener("click", this.moveCarousel.bind(this, "left"));
  this.rightBtn.addEventListener(
    "click",
    this.moveCarousel.bind(this, "right")
  );
};

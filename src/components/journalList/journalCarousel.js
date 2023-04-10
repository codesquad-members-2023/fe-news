export function Carousel() {
  this.container;
  this.leftBtn;
  this.rightBtn;
  this.directionByNum = 0;
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
  this.container = document.querySelector(".journal-container");
  if (direction === "left") {
    this.directionByNum = 1;
  } else if (direction === "right") {
    this.directionByNum = -1;
  }

  const transformStyle = getComputedStyle(this.container).getPropertyValue(
    "transform"
  );
  const transformMatrix = new WebKitCSSMatrix(transformStyle);
  const currentTranslateX = transformMatrix.m41;

  const newTranslateX = currentTranslateX + 900 * this.directionByNum;
  this.container.style.transform = `translateX(${newTranslateX}px)`;

  if (newTranslateX === 0) {
    this.leftBtn.style.display = "none";
  } else if (newTranslateX === -2700) {
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

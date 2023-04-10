function Carousel() {
  this.element = document.querySelector(".journal-carousel");
  this.leftBtn = document.querySelector(".journal-carousel-btn:first-child");
  this.rightBtn = document.querySelector(".journal-carousel-btn:last-child");
  this.directionByNum = 0;
}

Carousel.prototype.moveCarousel = function (direction) {
  if (direction === "left") {
    this.directionByNum = 1;
  } else if (direction === "right") {
    this.directionByNum = -1;
  }
  const trackWidthPercent = 100 / 4; // 언론사 영역 (6x4) 4개
  this.element.style.transition = "transform .5s ease-in-out";
  this.element.style.transform = `translateX(${
    this.directionByNum * trackWidthPercent
  }%)`;
  this.element.ontransitionend = () => {
    this.reorgannizeEl(direction);
  };
};

Carousel.prototype.reorgannizeEl = function (direction) {
  this.element.removeAttribute("style");
  direction === "left"
    ? this.element.insertBefore(
        this.element.lastElementChild,
        this.element.firstElementChild
      )
    : this.element.appendChild(this.element.firstElementChild);
};

Carousel.prototype.addEvent = function () {
  this.leftBtn.addEventListener("click", this.moveCarousel.bind(this, "left"));
  this.rightBtn.addEventListener(
    "click",
    this.moveCarousel.bind(this, "right")
  );
};

export class ProgressBarAnimationManager {
  #timeDiff;
  constructor(props) {
    this.props = props;
    this.PAGE_FLIP_INTERVAL = 20000;
    this.currentBackgroundColor = "#4362D0";
    this.backgroundColorToFill = "#7890E7";
    this.DIRECTION = "right";
  }

  init() {
    this.resetAnimationTime();
    this.startFillAnimation();
  }

  resetAnimationTime() {
    this.currentTime = this.startTime;
  }

  startFillAnimation() {
    this.startTime = null;
    this.raf = requestAnimationFrame((timestamp) =>
      this.animateBackgroundColor(timestamp)
    );
  }

  animateBackgroundColor(timestamp) {
    if (this.startTime === null) this.startTime = timestamp;
    this.currentTime = timestamp;
    this.#timeDiff = this.currentTime - this.startTime;

    if (this.#timeDiff <= this.PAGE_FLIP_INTERVAL) {
      this.setCurrentCategoryTarget();
      const percentage = this.caculatePercentageToFill();
      this.changeBackgroundColorBy(percentage);
      this.raf = requestAnimationFrame(this.animateBackgroundColor.bind(this));
    } else if (this.#timeDiff > this.PAGE_FLIP_INTERVAL) {
      const { moveToNextPageToward } = this.props;
      moveToNextPageToward(this.DIRECTION);
    }
  }

  setCurrentCategoryTarget() {
    const { getCurrentCategoryNode } = this.props;
    this.target = getCurrentCategoryNode();
    this.targetContainerDiv = this.target.closest(
      ".list-view__current-category"
    );
  }

  caculatePercentageToFill() {
    return (1 / this.PAGE_FLIP_INTERVAL) * this.#timeDiff * 100;
  }

  changeBackgroundColorBy(percentage) {
    this.targetContainerDiv.style.backgroundImage = `linear-gradient(to right, ${this.currentBackgroundColor} ${percentage}%, ${this.backgroundColorToFill} ${percentage}%)`;
  }
}

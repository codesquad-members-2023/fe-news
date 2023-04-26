export class ProgressBarAnimationManager {
  #timeDiff;
  constructor(props) {
    this.props = props;
  }

  init(progressBarNode) {
    this.setProgressBarNode(progressBarNode);
    this.resetAnimationTime(progressBarNode);
    this.startFillAnimation();
  }

  setProgressBarNode(progressBarNode) {
    this.target = progressBarNode;
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

    const {
      PAGE_FLIP_INTERVAL,
      DIRECTION,
      repaintProgressBar,
      moveToNextPageToward,
      initProgressBarAnimation,
    } = this.props;

    if (this.#timeDiff <= PAGE_FLIP_INTERVAL) {
      const percentage = this.caculatePercentageToFill(PAGE_FLIP_INTERVAL);
      repaintProgressBar(this.target, percentage);
      this.raf = requestAnimationFrame(this.animateBackgroundColor.bind(this));
    } else if (this.#timeDiff > PAGE_FLIP_INTERVAL) {
      moveToNextPageToward(DIRECTION);
      initProgressBarAnimation();
    }
  }

  caculatePercentageToFill(PAGE_FLIP_INTERVAL) {
    return (1 / PAGE_FLIP_INTERVAL) * this.#timeDiff * 100;
  }
}

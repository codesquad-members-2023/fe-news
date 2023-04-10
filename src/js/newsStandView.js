export default class NewsStandView {
  constructor(ref, header, headline, headlineAnimationInfo) {
    this.mainContainer = ref.newsStandContainer;
    this.header = header;
    this.headline = headline;

    this.rollingHeadlineLeft;
    this.rollingHeadlineRight;

    this.headlineTransitionDuration = headlineAnimationInfo.transitionDuration;
    this.leftHeadlineDelayDuration = headlineAnimationInfo.leftDelayDuration;
    this.rightHeadlineDelayDuration = headlineAnimationInfo.rightDelayDuration;
    this.headlineLiWidth = headlineAnimationInfo.headlineLiWidth;

    this.leftHeadlineAnimationStartTime = null;
    this.rightHeadlineAnimationStartTime = null;
    this.headlineAnimationId;
    this.render();
  }

  async getTemplate() {
    const headerTemplate = this.header.getHeaderTemplate();
    const headlineTemplate = await this.headline.getHeadlineTemplate();
    return `${headerTemplate}${headlineTemplate}`;
  }

  async render() {
    const template = await this.getTemplate();
    this.mainContainer.insertAdjacentHTML('afterbegin', template);
    this.setHeadlineSection();
    this.setEvent();
  }

  setEvent() {
    window.addEventListener('DOMContentLoaded', this.setHeadlineAnimation());
  }

  resortHeadlineList(headline) {
    headline.appendChild(headline.firstElementChild);
    headline.removeAttribute('style');
  }

  setHeadlineSection() {
    this.headlineContainer = this.mainContainer.querySelector('.newsstand_headline_container');
    this.rollingHeadlineLeft = this.headlineContainer.querySelector('.headline_rolling_news.left');
    this.rollingHeadlineRight = this.headlineContainer.querySelector(
      '.headline_rolling_news.right'
    );
  }

  translateHeadline(location) {
    location.style.transitionDuration = `${this.headlineTransitionDuration}ms`;
    location.style.transform = `translateY(-${this.headlineLiWidth}px)`;
    location.ontransitionend = () => this.resortHeadlineList(location);
    this.headlineAnimationStartTime = null;
  }

  headlineRollingHandler(location) {
    location === 'left'
      ? this.translateHeadline(this.rollingHeadlineLeft)
      : this.translateHeadline(this.rollingHeadlineRight);
  }

  setHeadlineAnimation() {
    const animateHeadline = (timestamp) => {
      if (!this.leftHeadlineAnimationStartTime) this.leftHeadlineAnimationStartTime = timestamp;
      const leftElapsedTime = timestamp - this.leftHeadlineAnimationStartTime;
      const rightElapseTime = !this.rightHeadlineAnimationStartTime
        ? 0
        : timestamp - this.rightHeadlineAnimationStartTime;

      if (leftElapsedTime >= this.leftHeadlineDelayDuration) {
        this.headlineRollingHandler('left');
        this.leftHeadlineAnimationStartTime = null;
        this.rightHeadlineAnimationStartTime = timestamp;
      }

      if (rightElapseTime >= this.rightHeadlineDelayDuration) {
        this.headlineRollingHandler('right');
        this.rightHeadlineAnimationStartTime = null;
      }
      this.headlineAnimationId = requestAnimationFrame(animateHeadline);
    };
    requestAnimationFrame(animateHeadline);
  }
}

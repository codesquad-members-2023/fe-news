export default class NewsStandView {
  constructor(ref, header, headline, headlineAnimationInfo) {
    this.mainContainer = ref.newsStandContainer;
    this.header = header;
    this.headline = headline;

    this.rollingHeadline;
    this.rollingHeadlineLeft;
    this.rollingHeadlineRight;

    this.headlineTransitionDuration = headlineAnimationInfo.transitionDuration;
    this.headlineDelayDuration = headlineAnimationInfo.delayDuration;
    this.headlineLiWidth = headlineAnimationInfo.headlineLiWidth;
    this.headlineAnimationStartTime = null;
    this.headlineHover = false;
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

  resortHeadlineNews(headline) {
    headline.appendChild(headline.firstElementChild);
    headline.removeAttribute('style');
  }

  setHeadlineSection() {
    this.rollingHeadline = this.mainContainer.querySelectorAll('.headline_rolling_news');
    this.rollingHeadlineLeft = this.rollingHeadline[0];
    this.rollingHeadlineRight = this.rollingHeadline[1];
  }

  translateHeadline() {
    this.rollingHeadline.forEach((headline) => {
      headline.style.transitionDuration = `${this.headlineTransitionDuration}ms`;
      headline.style.transform = `translateY(-${this.headlineLiWidth}px)`;
      headline.ontransitionend = () => this.resortHeadlineNews(headline);
      this.headlineAnimationStartTime = null;
    });
  }

  setHeadlineAnimation() {
    const animateHeadline = (timestamp) => {
      if (!this.headlineAnimationStartTime) this.headlineAnimationStartTime = timestamp;
      const elapsedTime = timestamp - this.headlineAnimationStartTime;

      if (elapsedTime >= 2000) {
        this.translateHeadline();
      }
      if (!this.headlineHover) {
        this.headlineAnimationId = requestAnimationFrame(animateHeadline);
      }
    };

    this.headlineAnimationId = requestAnimationFrame(animateHeadline);
  }
}

export default class NewsStandView {
  constructor(ref, header, headline) {
    this.mainContainer = ref.newsStandContainer;
    this.header = header;
    this.headline = headline;

    this.rollingHeadline;
    this.rollingHeadlineLeft;
    this.rollingHeadlineRight;
    this.headlineAnimationStartTime = null;
    this.headlineTransitionDuration = 1000;
    this.headlineDelayDuration = 5000;
    this.headlineLiWidth = 17;
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
    this.setHeadlineAnimation();
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

      if (elapsedTime >= this.headlineDelayDuration) {
        this.translateHeadline();
      }

      requestAnimationFrame(animateHeadline);
    };

    requestAnimationFrame(animateHeadline);
  }
}

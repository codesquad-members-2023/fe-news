export default class NSHeadlineView {
  constructor({ NS_HEADLINE_INFO }, REFERENCE, dataFetcher, API_PATH, model) {
    this._parentElem = REFERENCE.NS_CONTAINER;
    this._info = NS_HEADLINE_INFO;
    this._dataFetcher = dataFetcher;
    this._API_PATH = API_PATH;
    this._model = model;
    this._animationStartTime = {
      left: null,
      right: null,
    };

    this._animationId;
    this.render();
  }

  async getData() {
    const headlineList = await this._dataFetcher(
      this._API_PATH.HEADLINE,
      this.getHeadlineList.bind(this)
    );
    return headlineList;
  }

  getHeadlineList(data) {
    const headlineList = {
      left: '',
      right: '',
    };

    data.forEach((headline) => {
      headline.id <= this._info.HEADLINE_LENGTH
        ? (headlineList.left += `<li>${headline.title}</li>`)
        : (headlineList.right += `<li>${headline.title}</li>`);
    });

    return headlineList;
  }

  async render() {
    const headlineList = await this.getData();
    const markUp = this.generateMarkup(headlineList);
    this._parentElem.insertAdjacentHTML('beforeend', markUp);
    this.setHeadlineSection();
    this.setHeadlineAnimation();
    this._model.getReady();
  }

  generateMarkup(headlineList) {
    return `<div class="newsstand_headline_container">
    <div class="newsstand_headline left">
      <a class="headline_press">${this._info.TITLE}</a>
      <div class="headline_rolling_container">
        <ul class="headline_rolling_news left">${headlineList.left}
        </ul>
      </div>
    </div>
    <div class="newsstand_headline right">
      <a class="headline_press">${this._info.TITLE}</a>
      <div class="headline_rolling_container">
        <ul class="headline_rolling_news right">${headlineList.right}
        </ul>
      </div>
    </div>
  </div>`;
  }

  resortHeadlineList(headline) {
    headline.appendChild(headline.firstElementChild);
    headline.removeAttribute('style');
  }

  setHeadlineSection() {
    const headlineSection = {
      container: this._parentElem.querySelector('.newsstand_headline_container'),
      left: null,
      right: null,
    };
    headlineSection.left = headlineSection.container.querySelector('.headline_rolling_news.left');
    headlineSection.right = headlineSection.container.querySelector('.headline_rolling_news.right');
    return headlineSection;
  }

  translateHeadline(target) {
    target.style.transitionDuration = `${this._info.ANIMATION.TRANSITION_DURATION}ms`;
    target.style.transform = `translateY(-${this._info.ANIMATION.HEADLINE_LIST_HEIGHT}px)`;
    target.ontransitionend = () => this.resortHeadlineList(target);
  }

  headlineRollingHandler(direction, target) {
    direction === 'left' ? this.translateHeadline(target) : this.translateHeadline(target);
  }

  setHeadlineAnimation() {
    const headlineSection = this.setHeadlineSection();
    const animateHeadline = (timestamp) => {
      if (!this._animationStartTime.left) this._animationStartTime.left = timestamp;
      const leftElapsedTime = timestamp - this._animationStartTime.left;
      const rightElapseTime = !this._animationStartTime.right
        ? 0
        : timestamp - this._animationStartTime.right;

      if (leftElapsedTime >= this._info.ANIMATION.LEFT_DELAY_DURATION) {
        this.headlineRollingHandler('left', headlineSection.left);
        this._animationStartTime.left = null;
        this._animationStartTime.right = timestamp;
      }

      if (rightElapseTime >= this._info.ANIMATION.RIGHT_DELAY_DURATION) {
        this.headlineRollingHandler('right', headlineSection.right);
        this._animationStartTime.right = null;
      }
      this._animationId = requestAnimationFrame(animateHeadline);
    };
    requestAnimationFrame(animateHeadline);
  }
}

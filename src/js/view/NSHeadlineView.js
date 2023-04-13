import { headlineAnimationInfo } from '../const/const.js';

export default class HEADLINEView {
  constructor({ headlineModel }, ref) {
    this._target = ref.newsstandContainer;
    this._model = headlineModel;
    this._markUp;

    this._headlineContainer;
    this._headlineLeft;
    this._headlineRight;
    this._animationStartTime = {
      left: null,
      right: null,
    };
    this._animationId;
    this.render();
  }

  async render() {
    await this._model.getInitialState();
    const state = this._model.getState();
    this._markUp = this.generateMarkup(state);
    this._target.insertAdjacentHTML('beforeend', this._markUp);
    this.setHeadlineSection();
    this.setHeadlineAnimation();
  }

  generateMarkup(state) {
    return `<div class="newsstand_headline_container">
    <div class="newsstand_headline left">
      <a class="headline_press">${state.title}</a>
      <div class="headline_rolling_container">
        <ul class="headline_rolling_news left">${state.headlineLeftList}
        </ul>
      </div>
    </div>
    <div class="newsstand_headline right">
      <a class="headline_press">${state.title}</a>
      <div class="headline_rolling_container">
        <ul class="headline_rolling_news right">${state.headlineRightList}
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
    this._headlineContainer = this._target.querySelector('.newsstand_headline_container');
    this._headlineLeft = this._headlineContainer.querySelector('.headline_rolling_news.left');
    this._headlineRight = this._headlineContainer.querySelector('.headline_rolling_news.right');
  }

  translateHeadline(location) {
    location.style.transitionDuration = `${headlineAnimationInfo.transitionDuration}ms`;
    location.style.transform = `translateY(-${headlineAnimationInfo.headlineLiWidth}px)`;
    location.ontransitionend = () => this.resortHeadlineList(location);
  }

  headlineRollingHandler(location) {
    location === 'left'
      ? this.translateHeadline(this._headlineLeft)
      : this.translateHeadline(this._headlineRight);
  }

  setHeadlineAnimation() {
    const animateHeadline = (timestamp) => {
      if (!this._animationStartTime.left) this._animationStartTime.left = timestamp;
      const leftElapsedTime = timestamp - this._animationStartTime.left;
      const rightElapseTime = !this._animationStartTime.right
        ? 0
        : timestamp - this._animationStartTime.right;

      if (leftElapsedTime >= headlineAnimationInfo.leftDelayDuration) {
        this.headlineRollingHandler('left');
        this._animationStartTime.left = null;
        this._animationStartTime.right = timestamp;
      }

      if (rightElapseTime >= headlineAnimationInfo.rightDelayDuration) {
        this.headlineRollingHandler('right');
        this._animationStartTime.right = null;
      }
      this._animationId = requestAnimationFrame(animateHeadline);
    };
    requestAnimationFrame(animateHeadline);
  }
}

import createEl from '../../utils/util.js';
import { CONSTANTS, API_URL, autoAnimationInfo }  from '../../core/constants.js';

class RollingBar {
  #PANEL_COUNT = 2;
  flickPanels;
  movePanel;
  constructor(rollingPressName, { autoAnimationInfo }, ...className) {
    this.ROLLING_LINK_PRESS = rollingPressName;
    this.TRANSLATE_TIME = autoAnimationInfo.transitionDuration;
    this.LEFT_DELAY_TIME =autoAnimationInfo.leftDelayTime;
    this.TIME_DIFF = autoAnimationInfo.timeDiff;
    this.classNames = [...className];
    this.rollingBar = createEl("section", "rolling-container");
    this.rafState = true;
  }

  render() {
    this.rollingBar.innerHTML = this.template();
    this.autoMovePanel();
    this.addEventRollingBar();
    return this.rollingBar;
  }

  template() {
    return this.classNames.reduce((template, className) => {
      template += `<div class="rolling-box">
      <a class="link-press">${this.ROLLING_LINK_PRESS}</a>
      <div class="flick-container">
        <ul class="flick-panels ${className}">
          <li class="flick-panel">1</li>
          <li class="flick-panel">2</li>
        </ul>
      </div>
    </div>`
    return template;
    }, '');
  }

  autoMovePanel() {
    let leftTime = null;
    let rightTime = null;
    this.movePanel = currentTime => {
      if(!leftTime) leftTime = currentTime;
      const leftTimeDiff = currentTime - leftTime;
      const rightTimeDiff = !rightTime ? 0 : currentTime - rightTime;

      if(leftTimeDiff >= this.LEFT_DELAY_TIME) {
        this.translatePanel.bind(this)('left');
        leftTime = null;
        rightTime = currentTime;
      }
      if(rightTimeDiff >= this.TIME_DIFF) {
        this.translatePanel.bind(this)('right');
        rightTime = null;
      }
      if(this.rafState) requestAnimationFrame(this.movePanel);
    }
    requestAnimationFrame(this.movePanel);
  }

  translatePanel(className) {
    const panel = className === 'left' ?
    this.rollingBar.querySelector('.left') : this.rollingBar.querySelector('.right');

    panel.style.transitionDuration = this.TRANSLATE_TIME;
    panel.style.transform = `translateY(-100%)`;
    panel.ontransitionend = () => this.appendPanel(panel);
  }

  appendPanel(panel) {
    panel.removeAttribute('style');
    panel.appendChild(panel.firstElementChild);
  }

  addEventRollingBar() {
    this.rollingBar.addEventListener('mouseover', ({ target }) => {
      if(target.tagName !== 'LI') return;
      this.rafState = false;
    });
    this.rollingBar.addEventListener('mouseout', ({ target }) => {
      if(target.tagName !== 'LI') return;
      this.rafState = true;
      requestAnimationFrame(() => this.movePanel());
    });
  }
}
export default RollingBar;
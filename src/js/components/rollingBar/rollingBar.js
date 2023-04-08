import createEl from '../../utils/util.js';

class RollingBar {
  #PANEL_COUNT = 2;
  #TRANSLATE_TIME = '500ms';
  flickPanels;
  movePanel;
  constructor(rollingPressName, delayTime, ...className) {
    this.ROLLING_LINK_PRESS = rollingPressName;
    this.DELAY_TIME = delayTime;
    this.classNames = [...className];
    this.rollingBar = createEl("section", "rolling-container");
    this.rafState = true;
  }

  init() {
    this.rollingBar.innerHTML = this.template();
    this.rollingHandler();
    return this.rollingBar;
  }

  template() {
    // 뼈대는 2개만 만들고, textContent로 그 안에 데이터만 변경되게 구현해보기.....되나?
    return this.classNames.reduce((template, className) => {
      template += `<div class="rolling-box ${className}">
      <a class="link-press">${this.ROLLING_LINK_PRESS}</a>
      <div class="flick-container">
        <ul class="flick-panels">
          <li class="flick-panel"></li>
          <li class="flick-panel"></li>
        </ul>
      </div>
    </div>`
    return template;
    }, '');
  }

  rollingHandler() {
    this.flickPanels = this.rollingBar.querySelector('.flick-panels');
    this.autoRollingPanel();
    this.addEventRollingBar();
  }

  autoRollingPanel() {
    let currentPanel = 0;
    let lastTime = 0;
    this.movePanel = currentTime => {
      let deltaTime = currentTime - lastTime;
      if (deltaTime > this.DELAY_TIME) {
        currentPanel++;
        if(currentPanel >= this.#PANEL_COUNT) currentPanel = 0;
        this.translatePanel();
        lastTime = currentTime;
      }
      if(this.rafState) requestAnimationFrame(this.movePanel);
    }
    requestAnimationFrame(this.movePanel);
  }

  //애니메이션 메소드는.. 분리해야...겠지요..?
  translatePanel() {
    this.flickPanels.style.transitionDuration = this.#TRANSLATE_TIME;
    this.flickPanels.style.transform = `translateY(-100%)`;
    this.flickPanels.ontransitionend = () => this.appendPanel();
  }

  appendPanel() {
    this.flickPanels.removeAttribute('style');
    this.flickPanels.appendChild(this.flickPanels.firstElementChild);
  }

  addEventRollingBar() {
    this.flickPanels.addEventListener('mouseover', () => this.rafState = false);
    this.flickPanels.addEventListener('mouseout', () => {
      this.rafState = true;
      requestAnimationFrame(this.movePanel);
    });
  }
}
export default RollingBar;
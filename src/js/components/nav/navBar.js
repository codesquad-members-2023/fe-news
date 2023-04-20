import { domUtils } from '../../utils/index.js';
import HeadLineWrapper from './headLineWrapper.js';

const { $ } = domUtils;

export default class NavBar {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'nav-bar';

    this.props = props;

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  render() {
    this.$ele.innerHTML = this.template();
    this.renderHeadLineWrapper();
  }

  renderHeadLineWrapper() {
    const $headLine = $({ selector: '.nav-bar__headLine', parent: this.$ele });
    const { headLines } = this.props.navBarData;

    new HeadLineWrapper($headLine, { headLines }).render();
  }

  template() {
    const { navBarData } = this.props;
    const { press } = navBarData;

    return /* html */ `
      <a href="" class="nav-bar__press">${press}</a>
      <div class="nav-bar__headLine">
      </div>
    `;
  }
}

import { $ } from '../../utils/dom.js';
import HeadLineWrapper from './headLineWrapper.js';

export default class NavBar {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'nav-bar';

    this.props = props;

    this.headLineWrapper;
  }

  mount() {
    this.render();

    const $headLine = $({ selector: '.nav-bar__headLine', parent: this.$ele });
    const { headLines } = this.props.navBarData;

    this.headLineWrapper = new HeadLineWrapper($headLine, { headLines });
    this.headLineWrapper.mount();

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  render() {
    this.$ele.innerHTML = this.template();
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

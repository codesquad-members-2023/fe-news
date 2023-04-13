import NavBar from './navBar.js';
import { getData } from '../../utils/getData.js';

export default class Nav {
  #url = 'http://localhost:3001/navBarData';

  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('nav');
    this.$ele.id = 'nav';

    this.leftBar;
    this.rightBar;
  }

  async mount() {
    const { left, right } = await getData(this.#url);

    this.leftBar = new NavBar(this.$ele, { navBarData: left });
    this.rightBar = new NavBar(this.$ele, { navBarData: right });
    this.leftBar.mount();
    this.rightBar.mount();

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }
}

import NavBar from './navBar.js';

export default class Nav {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('nav');
    this.$ele.id = 'nav';

    this.props = props;

    this.leftBar;
    this.rightBar;
  }

  mount() {
    const { leftNavBarHeadLines, rightNavBarHeadLines } = this.props;

    this.leftBar = new NavBar(this.$ele, { navBarData: leftNavBarHeadLines });
    this.rightBar = new NavBar(this.$ele, { navBarData: rightNavBarHeadLines });
    this.leftBar.mount();
    this.rightBar.mount();

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }
}

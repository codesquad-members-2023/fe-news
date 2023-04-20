import NavBar from './navBar.js';

export default class Nav {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('nav');
    this.$ele.id = 'nav';

    this.props = props;

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  render() {
    const { leftNavBarHeadLines, rightNavBarHeadLines } = this.props;

    new NavBar(this.$ele, { navBarData: leftNavBarHeadLines }).render();
    new NavBar(this.$ele, { navBarData: rightNavBarHeadLines }).render();
  }
}

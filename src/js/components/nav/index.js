import NavBar from './navBar.js';

export default class Nav {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('nav');
    this.$mainEle.id = 'nav';

    this.props = props;

    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);
  }

  render() {
    const { leftNavBarHeadLines, rightNavBarHeadLines } = this.props;

    new NavBar(this.$mainEle, { navBarData: leftNavBarHeadLines }).render();
    new NavBar(this.$mainEle, { navBarData: rightNavBarHeadLines }).render();
  }
}

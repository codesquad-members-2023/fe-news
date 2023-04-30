export default class MainContentContainer {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('div');
    this.$mainEle.className = 'main-content__container';

    this.props = props;

    this.children = new Set();
    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);
  }

  render() {
    this.removeChildren();
    this.renderChildren();
  }

  renderChildren() {}

  remove() {
    this.$mainEle.remove();
    this.removeChildren();
  }

  removeChildren() {
    if (this.children.size === 0) return;

    this.children.forEach((child) => child.remove());
    this.children.clear();
  }
}

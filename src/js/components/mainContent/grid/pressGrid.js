import PressGridItem from './pressGridItem.js';

export default class PressGrid {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('div');
    this.$mainEle.className = 'press-grid';

    this.props = props;

    this.children = new Set();
    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);
  }

  render() {
    this.removeChildren();
    this.renderChildren();
  }

  renderChildren() {
    const { itemsData, itemCount } = this.props;

    for (let i = 0; i < itemCount; i += 1) {
      const itemData = itemsData[i];
      this.children.add(new PressGridItem(this.$mainEle, itemData));
    }

    this.children.forEach((child) => child.render());
  }

  remove() {
    this.$mainEle.remove();

    if (!this.unregister) return;
    this.unregister();
  }

  removeChildren() {
    if (this.children.size === 0) return;

    this.children.forEach((child) => child.remove());
    this.children.clear();
  }
}

export default class PressGridItem {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'press-grid__item';

    this.props = props;
  }

  mount() {
    this.render();
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    const { pressName, pressLogo } = this.props;
    return /* html */ `<img class="press-logo" src="${pressLogo}" alt="${pressName}"/>`;
  }
}

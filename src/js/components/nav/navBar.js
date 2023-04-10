export default class NavBar {
  #startIdx = 0;

  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'nav-bar';

    this.props = props;
    this.state = {};

    this.initState();
  }

  mount() {
    this.render();
    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    const { navBarData } = this.props;
    const { press, headLines } = navBarData;
    const { currentIdx } = this.state;

    return /* html */ `
      <a href="" class="nav-bar__press">${press}</a>
      <div class="nav-bar__headLine">
        <div class="nav-bar__headLine-wrapper">
          <a href="">${headLines[currentIdx]}</a>
        </div>
      </div>
    `;
  }

  initState() {
    this.state = { currentIdx: this.#startIdx };
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }
}

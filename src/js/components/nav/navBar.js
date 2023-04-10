export default class NavBar {
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
    const { press, headLines } = this.props;
    // * 2개의 headline으로 ui 확인
    const fakeHeadLines = headLines.slice(0, 2);

    return /* html */ `
      <a href="" class="nav-bar__press">${press}</a>
      <div class="nav-bar__headLine">
        <div class="nav-bar__headLine-wrapper">
          ${fakeHeadLines.map((headLine) => `<a href="">${headLine}</a>`).join('')}
        </div>
      </div>
    `;
  }

  initState() {
    const { press, headLines } = this.props;

    this.setState({ press, headLines });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }
}

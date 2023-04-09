export class Component {
  _state;
  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.setUp();
    this.render();
    this.setEvent();
  }

  setUp() {}
  mounted() {}
  setEvent() {}
  render() {
    this.target.innerHTML = this.templete();
    this.mounted();
  }

  setState(newState) {
    this._state = { ...this._state, ...newState };
    this.render();
  }
}

export default class Component {
  parentElement;
  state;
  props;

  constructor(parentElement, props) {
    this.parentElement = parentElement;
    this.props = props;

    this.setup();
    this.setEvent();
    this.render();
    this.componentDidMount();
  }

  setup() {}

  setEvent() {}

  template() {
    return "";
  }

  // 오버라이딩 X
  render() {
    this.parentElement.innerHTML = this.template();
    this.componentDidMount();
  }

  update() {
    this.parentElement.innerHTML = this.template();
    this.componentDidUpdate();
  }

  componentDidMount() {}

  componentDidUpdate() {}

  // 오버라이딩 X
  setState(newState) {
    this.state = { ...this.state, ...newState };

    // this.render();
    this.update();
    this.componentDidUpdate();
  }

  // 오버라이딩 X
  addEvent(eventType, selector, callback) {
    this.parentElement.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}

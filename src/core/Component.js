export default class Component {
  parentElement;
  state;
  props;

  constructor(parentElement, props) {
    this.parentElement = parentElement;
    this.props = props;

    this.setup();
    this.render();
  }

  setup() {}

  setEvent() {}

  template() {
    return "";
  }

  render() {
    const dupParentElement = this.parentElement.cloneNode(true);
    dupParentElement.innerHTML = this.template();
    this.parentElement.parentNode.replaceChild(
      dupParentElement,
      this.parentElement
    );
    this.parentElement = dupParentElement;

    this.setEvent();
    this.componentDidMount();
    this.renderChildComponents();
  }

  update() {
    this.parentElement.innerHTML = this.template();
    this.componentDidUpdate();
    this.renderChildComponents();
  }

  componentDidMount() {}

  componentDidUpdate() {}

  renderChildComponents() {}

  setState(newState, shouldUpdate = true) {
    this.state = { ...this.state, ...newState };

    if (!shouldUpdate) return;

    this.update();
  }

  addEvent(eventType, selector, callback) {
    this.parentElement.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}

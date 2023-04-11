import MainContentHeader from './mainContentHeader.js';

export default class MainContent {
  constructor($parent) {
    this.$parent = $parent;
    this.$ele = document.createElement('main');
    this.$ele.id = 'main-content';

    this.state = {};
    this.initState();

    this.header;
  }

  mount() {
    const { isAllPressTab, isGridTab } = this.state;
    const { pressTabHandler } = this;

    this.header = new MainContentHeader(this.$ele, {
      isAllPressTab,
      isGridTab,
      pressTabHandler: pressTabHandler.bind(this)
    });
    this.header.mount();

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  update({ newState }) {
    this.setState(newState);
    this.header.update({ newProps: this.state });
  }

  initState() {
    this.state = { isAllPressTab: true, isGridTab: true };
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  pressTabHandler() {
    const { isAllPressTab } = this.state;
    this.update({ newState: { isAllPressTab: !isAllPressTab } });
  }
}

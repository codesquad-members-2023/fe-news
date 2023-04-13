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
    const { activePressTab, activeShowTab } = this.state;
    const { pressTabHandler, showTabHandler } = this;

    this.header = new MainContentHeader(this.$ele, {
      activePressTab,
      activeShowTab,
      pressTabHandler: pressTabHandler.bind(this),
      showTabHandler: showTabHandler.bind(this)
    });
    this.header.mount();

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }

  update({ newState }) {
    this.setState(newState);
    this.header.update({ newProps: this.state });
  }

  initState() {
    this.state = { activePressTab: 'all', activeShowTab: 'grid' };
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  pressTabHandler() {
    const { activePressTab } = this.state;
    const newActivePressTab = activePressTab === 'all' ? 'subscribed' : 'all';
    this.update({ newState: { activePressTab: newActivePressTab } });
  }

  showTabHandler() {
    const { activeShowTab } = this.state;
    const newActiveShowTab = activeShowTab === 'grid' ? 'list' : 'grid';
    this.update({ newState: { activeShowTab: newActiveShowTab } });
  }
}

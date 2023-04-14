import MainContentHeader from './mainContentHeader.js';
import MainContentContainer from './mainContentContainer.js';

export default class MainContent {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('main');
    this.$ele.id = 'main-content';

    this.state = {};
    this.initState();
    this.props = props;

    this.header;
    this.grid;
  }

  mount() {
    const { activePressTab, activeShowTab } = this.state;
    const { pressData } = this.props;
    const { pressTabHandler, showTabHandler } = this;

    this.header = new MainContentHeader(this.$ele, {
      activePressTab,
      activeShowTab,
      pressTabHandler: pressTabHandler.bind(this),
      showTabHandler: showTabHandler.bind(this)
    });
    this.grid = new MainContentContainer(this.$ele, { allPressData: pressData });
    this.header.mount();
    this.grid.mount();

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

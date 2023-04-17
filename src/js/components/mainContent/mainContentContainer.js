import { getChucks } from '../../utils/getData.js';
import { subscriptionListStore } from '../../store/index.js';
import MainContentGrid from './mainContentGrid.js';

export default class MainContentContainer {
  #gridItemCount = 24;

  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('div');
    this.$ele.className = 'main-content__container';

    this.props = props;

    this.allGrid;
    this.subscribedGrid;
  }

  mount() {
    const { allPressData } = this.props;
    const { subscriptionList } = subscriptionListStore.getState();
    const subscribedPressData = allPressData.filter(({ pressName }) => subscriptionList.includes(pressName));

    const allPressChucks = getChucks({ arr: allPressData, count: this.#gridItemCount });
    const subscribedPressChucks = getChucks({ arr: subscribedPressData, count: this.#gridItemCount });

    this.allGrid = new MainContentGrid(this.$ele, { pressTabType: 'all', pressChucks: allPressChucks });
    this.subscribedGrid = new MainContentGrid(this.$ele, {
      pressTabType: 'subscribed',
      pressChucks: subscribedPressChucks
    });

    this.allGrid.mount();
    this.subscribedGrid.mount();

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }
}

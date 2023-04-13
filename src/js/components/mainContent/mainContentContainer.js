import { getChucks } from '../../utils/getData.js';
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
    const { pressData: allPressData } = this.props;
    const subscribedPressData = allPressData.filter(({ isSubscribed }) => isSubscribed);

    const allPressChucks = getChucks({ arr: allPressData, count: this.#gridItemCount });
    const subscribedPressChucks = getChucks({ arr: subscribedPressData, count: this.#gridItemCount });

    this.allGrid = new MainContentGrid(this.$ele, { pressChucks: allPressChucks });
    this.subscribedGrid = new MainContentGrid(this.$ele, { pressChucks: subscribedPressChucks });

    this.allGrid.mount();
    this.subscribedGrid.mount();

    this.$parent.insertAdjacentElement('beforeend', this.$ele);
  }
}

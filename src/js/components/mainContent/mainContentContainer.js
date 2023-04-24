import { CATEGORY_ORDER } from '../../constants/index.js';
import { dataUtils } from '../../utils/index.js';
import MainContentGrid from './mainContentGrid.js';
import MainContentList from './mainContentList.js';

const { getDataByCategory, getDataCountByCategory } = dataUtils;

export default class MainContentContainer {
  constructor($parent, props) {
    this.$parent = $parent;
    this.$mainEle = document.createElement('div');
    this.$mainEle.className = 'main-content__container';

    this.props = props;

    this.$parent.insertAdjacentElement('beforeend', this.$mainEle);
  }

  render() {
    const { allPressData } = this.props;

    new MainContentGrid(this.$mainEle, { pressTabType: 'all', allPressData }).render();
    new MainContentGrid(this.$mainEle, { pressTabType: 'subscribed', allPressData }).render();

    const dataByCategory = getDataByCategory({
      dataArr: allPressData,
      categoryOrder: CATEGORY_ORDER
    });
    const dataCountByCategory = getDataCountByCategory(dataByCategory);

    new MainContentList(this.$mainEle, {
      pressTabType: 'all',
      allPressData: dataByCategory,
      dataCountByCategory
    }).render();
  }
}

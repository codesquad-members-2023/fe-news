import { CATEGORY } from '../../constants/index.js';
import { dataUtils, getUniqueRandomNumbersArr } from '../../utils/index.js';
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

    const randomOrder = getUniqueRandomNumbersArr(0, CATEGORY.length - 1);
    const categories = randomOrder.map((order) => CATEGORY[order]);
    const dataByCategory = getDataByCategory({
      dataArr: allPressData,
      categories
    });
    const dataCountByCategory = getDataCountByCategory(dataByCategory);

    new MainContentList(this.$mainEle, {
      pressTabType: 'all',
      allPressData: dataByCategory,
      categories,
      dataCountByCategory
    }).render();
  }
}

export default class MainContentHeader {
  #imgSrc = {
    listBlue: '../../../src/images/list_blue.svg',
    listGray: '../../../src/images/list_gray.svg',
    gridBlue: '../../../src/images/grid_blue.svg',
    gridGray: '../../../src/images/grid_gray.svg'
  };

  constructor($parent, props) {
    this.$parent = $parent;
    this.$ele = document.createElement('header');
    this.$ele.className = 'main-content__header';

    this.props = props;
  }

  mount() {
    this.render();
    this.setEvent();
    this.$parent.insertAdjacentElement('afterbegin', this.$ele);
  }

  update({ newProps }) {
    this.updateProps(newProps);
    this.render();
  }

  render() {
    this.$ele.innerHTML = this.template();
  }

  template() {
    const { activePressTab, activeShowTab } = this.props;
    const { listBlue, listGray, gridBlue, gridGray } = this.#imgSrc;

    return /* html */ `
      <div class="press-tab">
        <span class="press-tab-btn press-tab__all ${
          activePressTab === 'all' ? 'active' : ''
        }">전체 언론사</span>
        <span class="press-tab-btn press-tab__subscribed ${
          activePressTab === 'subscribed' ? 'active' : ''
        }">내가 구독한 언론사</span>
      </div>
      <div class="show-tab">
        <img class="show-tab-btn show-tab__list" src="${
          activeShowTab === 'list' ? listBlue : listGray
        }">
        <img class="show-tab-btn show-tab__grid" src="${
          activeShowTab === 'grid' ? gridBlue : gridGray
        }">
      </div>
    `;
  }

  updateProps(newProps) {
    this.props = { ...this.props, ...newProps };
  }

  setEvent() {
    this.$ele.addEventListener('click', ({ target }) => {
      const { activePressTab, pressTabHandler } = this.props;
      const targetClassList = target.classList;
      if (
        (targetClassList.contains('press-tab__all') && activePressTab === 'subscribed') ||
        (targetClassList.contains('press-tab__subscribed') && activePressTab === 'all')
      )
        pressTabHandler();
    });
  }
}

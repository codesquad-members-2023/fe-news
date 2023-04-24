import {
  add,
  addStyle,
  addShadow,
  getProperty,
  createWrap,
  select,
} from '@utils/dom';
import style from './GridViewItemStyle';
import store from '@store/index';

import { StoreType } from '@utils/redux';
import { UserType } from '@store/user/userType';

interface GridViewItem {
  icon?: string | null;
}

class GridViewItem extends HTMLElement {
  wrap: HTMLElement | null = null;
  press: any | null = null;
  userStore: StoreType<UserType>;

  constructor() {
    super();
    this.userStore = store.user;
  }

  connectedCallback() {
    this.wrap = createWrap();
    this.wrap.classList.add('grid-view-item');
    this.append(this.wrap);
    this.render();
    addStyle({
      target: this.wrap,
      style: style.call(this, this),
    });
    this.userStore.subscribe(() => {
      this.renderSubscribingBtn();
    });
  }

  renderSubscribingBtn() {
    const id = getProperty({
      target: this,
      name: 'id',
    });
    if (!id) {
      this.wrap?.classList.add('no-hover');
      return;
    }
    const subscribingPress: string[] =
      this.userStore.getState().subscribingPressId;
    const isSubscribed = id ? subscribingPress.includes(id) : false;
    const btnContainer = this.querySelector('.press-subscribe-btn-container');
    const template = `${
      isSubscribed
        ? `<button-element icon="close" id="${id}">해지하기</button-element>`
        : `<button-element icon="plus" id="${id}">구독하기</button-element>`
    }`;

    btnContainer &&
      add({
        target: btnContainer,
        template,
      });
  }

  render() {
    const image = getProperty({
      target: this,
      name: 'image',
    });

    const index = getProperty({
      target: this,
      name: 'index',
    });

    const isRightItem = (Number(index) + 1) % 6 === 0;
    const isBottomItem = Number(index) + 1 > 18;
    if (this.wrap) {
      isRightItem && this.wrap.classList.add('right-item');
      isBottomItem && this.wrap.classList.add('bottom-item');
    }

    const template = `
    <button>
      <div class="press-logo" ${
        image ? `style="background-image: url(${image})"` : ''
      }></div>
      <div class="press-subscribe-btn-container hide">
      </div>
    </button>
    `;
    add({
      target: this.wrap,
      template,
    });

    this.renderSubscribingBtn();
    this.handleHover();
  }

  handleHover = () => {
    this.wrap?.addEventListener('mouseenter', () => {
      this.wrap
        ?.querySelector('.press-subscribe-btn-container')
        ?.classList.remove('hide');
      this.addEventListener('mouseleave', () => {
        this.wrap
          ?.querySelector('.press-subscribe-btn-container')
          ?.classList.add('hide');
      });
    });
  };
}

export default GridViewItem;

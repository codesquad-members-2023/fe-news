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
import { PressType } from '@store/section/sectionType';

interface GridViewItem {
  icon?: string | null;
}

class GridViewItem extends HTMLElement {
  wrap: HTMLElement | null = null;
  press: PressType | null = null;

  connectedCallback() {
    this.wrap = createWrap();
    this.wrap.classList.add('grid-view-item');
    this.append(this.wrap);
    this.render();
    addStyle({
      target: this.wrap,
      style: style.call(this, this),
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
        <button-element icon="plus">구독하기</button-element>
      </div>
    </button>
    `;
    add({
      target: this.wrap,
      template,
    });
    this.handleHover();
    this.handleClick();
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

  handleClick = () => {
    const storeUser = store.user;

    this.addEventListener('click', () => {
      const id = this.getAttribute('id');
      if (!id) return;

      storeUser.subscribe(() => {
        console.log(storeUser.getState());
      });

      storeUser.dispatch({
        type: 'SUBSCRIBE',
        payload: id,
      });
    });
  };
}

export default GridViewItem;

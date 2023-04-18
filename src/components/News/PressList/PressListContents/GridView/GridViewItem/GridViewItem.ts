import {
  add,
  addStyle,
  addShadow,
  getProperty,
  createWrap,
  select,
} from '@utils/dom';
import style from './GridViewItemStyle';

import { PressType } from '@store/press/pressType';

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

  static get observedAttributes() {
    return ['is-subscribed'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'is-subscribed') {
      this.render();
    }
  }

  render() {
    const id = getProperty({
      target: this,
      name: 'id',
    });

    const image = getProperty({
      target: this,
      name: 'image',
    });

    const index = getProperty({
      target: this,
      name: 'index',
    });

    const isSubscribed = getProperty({
      target: this,
      name: 'is-subscribed',
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
        ${
          isSubscribed === 'true'
            ? `<button-element icon="close" id="${id}">해지하기</button-element>`
            : `<button-element icon="plus" id="${id}">구독하기</button-element>`
        }
      </div>
    </button>
    `;
    add({
      target: this.wrap,
      template,
    });
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

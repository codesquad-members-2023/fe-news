import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import GridViewItemStyle from './GridViewItemStyle';
import store from '@store';

interface GridViewItem {
  icon?: string | null;
}

class GridViewItem extends HTMLElement {
  connectedCallback() {
    addShadow({ target: this });
    this.render();
    this.handleHover();
    this.handleClick();
  }

  render() {
    const press = getProperty({
      target: this,
      name: 'press',
    });

    const template = `
    <button>
      <div class="press-logo" ${
        press
          ? `style="background-image: url(src/assets/images/press-logo/${press}.png)"`
          : ''
      }></div>
      <div class="press-subscribe-btn-container hide">
        <button-element icon="plus">구독하기</button-element>
      </div>
    </button>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: new GridViewItemStyle({ target: this }).element,
    });
  }

  handleHover = () => {
    this.addEventListener('mouseenter', () => {
      this.shadowRoot
        ?.querySelector('.press-subscribe-btn-container')
        ?.classList.remove('hide');
      this.addEventListener('mouseleave', () => {
        this.shadowRoot
          ?.querySelector('.press-subscribe-btn-container')
          ?.classList.add('hide');
      });
    });
  };

  handleClick = () => {
    const storeUser = store.user;

    this.addEventListener('click', () => {
      const press = this.getAttribute('press');
      storeUser.subscribe(() => {
        console.log(storeUser.getState());
      });

      storeUser.dispatch({
        type: 'SUBSCRIBE',
        payload: press,
      });
    });
  };
}

export default GridViewItem;

import { add, addShadow, addStyle, create, select } from '@utils/dom.js';
import Modal from '../Modal';
import { StoreType } from '@utils/redux';
import store from '@store/index';
import { UserType } from '@store/user/userType';

class UnsubscribeModal {
  modal: HTMLElement | null;
  pressName: string;
  pressId: string;
  userStore: StoreType<UserType>;
  constructor(pressName: string, pressId: string) {
    this.modal = null;
    this.pressName = pressName;
    this.pressId = pressId;
    this.userStore = store.user;
  }

  render() {
    this.modal = create({
      tagName: 'modal-element',
      attributeList: [
        ['main-btn', '아니오'],
        ['sub-btn', '예, 해지합니다'],
        ['text', `<b>${this.pressName}</b>을(를)<br> 구독해지하시겠습니까?`],
      ],
    });
  }

  show() {
    this.render();
    this.modal && document.body.append(this.modal);

    const mainBtn = select({
      selector: ['modal-element', '#main-btn'],
    });

    mainBtn.addEventListener('click', this.handleMainBtnClick.bind(this));

    const subBtn = select({
      selector: ['modal-element', '#sub-btn'],
    });
    subBtn.addEventListener('click', this.handleSubBtnClick.bind(this));

    select({ selector: ['modal-element', '#backdrop'] }).addEventListener(
      'click',
      this.handleBlur.bind(this)
    );
  }

  handleMainBtnClick() {
    this.close();
  }

  handleSubBtnClick() {
    this.userStore.dispatch({
      type: 'UNSUBSCRIBE',
      payload: this.pressId,
    });
    this.close();
  }

  close() {
    this.modal?.remove();
  }

  handleBlur(e: Event) {
    this.close();
  }
}

export default UnsubscribeModal;

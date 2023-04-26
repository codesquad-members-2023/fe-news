import { getUser } from '@apis/user';
import { UserType } from '@store/user/userType';
import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import { StoreType } from '@utils/redux';
import store from './store';
import { TEMP_ID } from './constant';

class App extends HTMLElement {
  userStore: StoreType<UserType>;
  constructor() {
    super();
    this.render();
    this.userStore = store.user;
  }

  async connectedCallback() {
    const userData = await getUser({ id: TEMP_ID });
    this.userStore.dispatch({ type: 'SET_USER', payload: userData[0] });
  }

  render() {
    const template = `
    <news-element></news-element>                                                                       
    `;

    addShadow({ target: this });
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

customElements.define('app-element', App);

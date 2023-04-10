import Header from './header.js';
import AutoRolling from './autoRolling/autoRolling.js';
import MainCommon from './main/mainCommon.js';
import MainGrid from './main/mainGrid.js';
import { createElement } from '../utils/dom.js';
// 애플리케이션의 root 컴포넌트.

const App = () => {
  const root = document.querySelector('#root');
  const $header = Header();
  const $autoRolling = AutoRolling();
  const $main = createElement('main');
  const [$mainHeader, $mainButtons] = MainCommon();
  const $mainGrid = MainGrid();
  $main.append($mainHeader, $mainButtons[0], $mainButtons[1], $mainGrid);

  const documentFragment = new DocumentFragment();
  documentFragment.append($header, $autoRolling, $main);

  root.appendChild(documentFragment);
};

export default App;

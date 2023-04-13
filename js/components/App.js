import Header from './header.js';
import AutoRolling from './autoRolling/autoRolling.js';
import MainCommon from './main/MainCommon/mainCommon.js';
import MainGrid from './main/MainAllGrid/mainAllGrid.js';
import MainAllList from './main/MainAllLIst/mainAllList.js';
import { createElement } from '../utils/dom.js';
// 애플리케이션의 root 컴포넌트.

const App = () => {
  const root = document.querySelector('#root');

  const $header = Header();
  const $autoRolling = AutoRolling();
  const $main = createElement('main');
  const [$mainHeader, $mainButtons] = MainCommon();
  const $mainGrid = MainGrid($main);
  $main.append($mainHeader, $mainButtons[0], $mainButtons[1], $mainGrid);

  const documentFragment = new DocumentFragment();
  documentFragment.append($header, $autoRolling, $main);

  MainAllList($main);

  root.appendChild(documentFragment);
};

export default App;

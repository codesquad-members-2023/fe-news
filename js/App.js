import Header from './components/header.js';
import AutoRolling from './components/autoRolling/autoRolling.js';
import MainCommon from './components/main/MainCommon/mainCommon.js';
import MainGrid from './components/main/MainAllGrid/mainAllGrid.js';
import MainAllList from './components/main/MainAllLIst/mainAllList.js';
import { MineGrid } from './components/main/mainMineGrid/mainMineGird.js';
import { MineList } from './components/main/MainMineList/mainMineList.js';
import { createElement } from './utils/dom.js';
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
  MineGrid($main);
  MineList($main);

  root.appendChild(documentFragment);
};

App();

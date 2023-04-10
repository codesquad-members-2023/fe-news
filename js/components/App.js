import Header from './header.js';
import AutoRolling from './autoRolling/autoRolling.js';
import MainHeader from './main/mainHeader.js';
import MainGrid from './main/mainGrid.js';
// 애플리케이션의 root 컴포넌트.

const App = () => {
  const root = document.querySelector('#root');
  const $header = Header();
  const $autoRolling = AutoRolling();
  const $mainHeader = MainHeader();
  const $mainGrid = MainGrid();
  const documentFragment = new DocumentFragment();
  documentFragment.append($header, $autoRolling, $mainHeader, $mainGrid);

  root.appendChild(documentFragment);
};

export default App;

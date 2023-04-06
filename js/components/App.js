import Header from './Header.js';
import AutoRolling from './AutoRolling.js';

// 애플리케이션의 root 컴포넌트.

const App = () => {
  const root = document.querySelector('#root');
  const $header = Header();
  const $autoRolling = AutoRolling();

  const documentFragment = new DocumentFragment();
  documentFragment.append($header, $autoRolling);

  root.appendChild(documentFragment);
};

export default App;

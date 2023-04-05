import Header from './view/header/header.js';
import AutoRolling from './view/autoRolling/autoRolling.js';

const App = () => {
  const root = document.querySelector('#root');
  const $header = Header();
  const $autoRolling = AutoRolling();

  const documentFragment = new DocumentFragment();
  documentFragment.append($header, $autoRolling);

  root.appendChild(documentFragment);
};

export default App;

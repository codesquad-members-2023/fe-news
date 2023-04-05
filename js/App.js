import Header from './view/header/header.js';

const App = () => {
  const root = document.querySelector('#root');
  const $header = Header();

  const documentFragment = new DocumentFragment();
  documentFragment.append($header);

  root.appendChild(documentFragment);
};

export default App;

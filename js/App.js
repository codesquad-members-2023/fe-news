import Header from './view/header';

const App = () => {
  const root = document.querySelector('#root');
  const $header = Header();

  const documentFragment = new DocumentFragment();
  documentFragment.append($header);

  root.appendChild(documentFragment);
};

export default App;

import HeaderMaker from './src/js/domMaker/headerMaker.js';
import NewsStandView from './src/js/newsStandView.js';

const ref = {
  newsStandContainer: document.querySelector('.newsstand_container'),
};

const main = () => {
  const header = new HeaderMaker();
  const view = new NewsStandView(ref, header);
};

main();

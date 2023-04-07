import HeaderMaker from './src/js/domMaker/headerMaker.js';
import NewsStandView from './src/js/newsStandView.js';
import { headerElement } from './src/js/const/const.js';

const ref = {
  newsStandContainer: document.querySelector('.newsstand_container'),
};

const main = () => {
  const header = new HeaderMaker({ headerElement });
  const view = new NewsStandView(ref, header);
};

main();

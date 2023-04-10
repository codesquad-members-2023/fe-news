import HeaderMaker from './src/js/domMaker/headerMaker.js';
import NewsStandView from './src/js/newsStandView.js';
import HeadlineMaker from './src/js/domMaker/headlineMaker.js';
import DataFetcher from './src/js/dataFetcher/dataFetcher.js';
import {
  headerElement,
  headlineElement,
  headlineAnimationInfo,
  dataUrl,
} from './src/js/const/const.js';

const ref = {
  newsStandContainer: document.querySelector('.newsstand_container'),
};

const main = () => {
  const dataFetcher = new DataFetcher(dataUrl);
  const header = new HeaderMaker({ headerElement });
  const headline = new HeadlineMaker({ headlineElement }, dataFetcher);
  const view = new NewsStandView(ref, header, headline, headlineAnimationInfo);
};

main();

import HEADERModel from './src/js/domMaker/headerMaker.js';
import HEADERView from './src/js/view/headerView.js';
import HEADLINEModel from './src/js/domMaker/headlineMaker.js';
import HEADLINEView from './src/js/view/headlineView.js';
import DataFetcher from './src/js/dataFetcher/dataFetcher.js';

import { headerElement, headlineElement, dataUrl, ref } from './src/js/const/const.js';

const dataFetcher = new DataFetcher(dataUrl);
const headerModel = new HEADERModel({ headerElement });
const headlineModel = new HEADLINEModel({ headlineElement }, dataFetcher);
new HEADERView({ headerModel }, ref);
new HEADLINEView({ headlineModel }, ref);

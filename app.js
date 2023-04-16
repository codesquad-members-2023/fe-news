import { NS_HEADER_INFO, NS_HEADLINE_INFO, REFERENCE } from './src/js/constant/dom.js';
import { API_BASE_URL, API_PATH } from './src/js/constant/api.js';
import NSHeaderView from './src/js/view/NSHeaderView.js';
import NSHeadlineView from './src/js/view/NSHeadlineView.js';
import GridAllModel from './src/js/models/gridAllModel.js';
import fetcher from './src/js/utils/dataFetcher.js';
import GridAllView from './src/js/view/gridAllView.js';
import NSSectionHeaderView from './src/js/view/NSSectionHeaderView.js';
import NSSectionHeaderModel from './src/js/models/NSSectionHeaderModel.js';

const dataFetcher = fetcher(API_BASE_URL);
new NSHeaderView({ NS_HEADER_INFO }, REFERENCE);
const sectionHeaderModel = new NSSectionHeaderModel();
new NSHeadlineView({ NS_HEADLINE_INFO }, REFERENCE, dataFetcher, API_PATH, sectionHeaderModel);
new NSSectionHeaderView(sectionHeaderModel);

const model = new GridAllModel(dataFetcher);
new GridAllView(model);

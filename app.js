import DataFetcher from './src/js/utils/dataFetcher.js';
import { NS_HEADER_INFO, NS_HEADLINE_INFO, REFERENCE } from './src/js/constant/dom.js';
import { API_BASE_URL, API_PATH } from './src/js/constant/api.js';
import NSHeaderView from './src/js/view/NSHeaderView.js';
import NSHeadlineView from './src/js/view/NSHeadlineView.js';

const dataFetcher = new DataFetcher(API_BASE_URL);
new NSHeaderView({ NS_HEADER_INFO }, REFERENCE);
new NSHeadlineView({ NS_HEADLINE_INFO }, dataFetcher, REFERENCE, API_PATH);

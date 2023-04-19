import { NS_HEADER_INFO, NS_HEADLINE_INFO, REFERENCE } from './src/js/constant/dom.js';
import { API_BASE_URL, API_PATH } from './src/js/constant/api.js';
import NSHeaderView from './src/js/view/NSHeaderView.js';
import NSHeadlineView from './src/js/view/NSHeadlineView.js';
import GridAllModel from './src/js/models/gridAllModel.js';
import fetcher from './src/js/utils/dataFetcher.js';
import GridAllView from './src/js/view/gridAllView.js';
import NSSectionHeaderView from './src/js/view/NSSectionHeaderView.js';
import NSSectionHeaderModel from './src/js/models/NSSectionHeaderModel.js';
import NSSectionButtonView from './src/js/view/NSSectionButtonView.js';
import NSSectionCurStateModel from './src/js/models/NSSectionCurStateModel.js';
import GridSubModel from './src/js/models/gridSubModel.js';
import GridSubView from './src/js/view/gridSubView.js';

const dataFetcher = fetcher(API_BASE_URL);
new NSHeaderView({ NS_HEADER_INFO }, REFERENCE);
const sectionHeaderModel = new NSSectionHeaderModel();
new NSHeadlineView({ NS_HEADLINE_INFO }, REFERENCE, dataFetcher, API_PATH, sectionHeaderModel);
const NSSectionCurState = new NSSectionCurStateModel();
const gridAllModel = new GridAllModel(NSSectionCurState, dataFetcher);
const gridSubModel = new GridSubModel(NSSectionCurState);
const buttonView = new NSSectionButtonView(gridAllModel);
new NSSectionHeaderView(sectionHeaderModel, buttonView, NSSectionCurState);

new GridSubView(gridSubModel);
new GridAllView(gridAllModel, gridSubModel);
// subscribe 로직을 entry에 넣어서 전체 로직을 보이게?

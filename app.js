import { NS_HEADER_INFO, NS_HEADLINE_INFO, REFERENCE } from './src/js/constant/dom.js';
import { API_BASE_URL, API_PATH } from './src/js/constant/api.js';
import fetcher from './src/js/utils/dataFetcher.js';
import NSHeaderView from './src/js/view/NSHeaderView.js';
import NSHeadlineView from './src/js/view/NSHeadlineView.js';
import NSSectionHeaderView from './src/js/view/NSSectionHeaderView.js';
import NSSectionHeaderModel from './src/js/models/NSSectionHeaderModel.js';
import NSSectionCurViewStateModel from './src/js/models/NSSectionCurStateModel.js';
import GridAllView from './src/js/view/gridAllView.js';
import GridSubView from './src/js/view/gridSubView.js';
import gridAllButtonView from './src/js/view/NSSectionGridAllbuttonView.js';
import gridSubButtonView from './src/js/view/NSSectionGridSubButtonView.js';

const dataFetcher = fetcher(API_BASE_URL);
new NSHeaderView({ NS_HEADER_INFO }, REFERENCE);
const sectionHeaderModel = new NSSectionHeaderModel();
new NSHeadlineView({ NS_HEADLINE_INFO }, REFERENCE, dataFetcher, API_PATH, sectionHeaderModel);
const NSSectionCurViewModel = new NSSectionCurViewStateModel(dataFetcher);
new gridAllButtonView(NSSectionCurViewModel);
new gridSubButtonView(NSSectionCurViewModel);
new NSSectionHeaderView(sectionHeaderModel, NSSectionCurViewModel);
new GridSubView(NSSectionCurViewModel);
new GridAllView(NSSectionCurViewModel);
// subscribe 로직을 entry에 넣어서 전체 로직을 보이게?
// 선언을 해서 export하면 굳이 const 변수의 이름과 class 이름이 겹치는 걸 걱정할
// 필요가 없을 것 같습니다

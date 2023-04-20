import Component from "../../core/Component.js";
import {
  SUBSCRIBING_PRESSES_KEY,
  getLocalData,
  setLocalData,
} from "../../../utils/sotrageManager.js";
import GridView from "./grid/GridView.js";
import ListView from "./list/ListView.js";
import StyleMenu from "./menu/StyleMenu.js";
import SubscriptionMenu from "./menu/SubscriptionMenu.js";
import { fetchPresses, loadSubscribing, store } from "../../store/store.js";

const ALL = "all";
const SUBSCRIBING = "sub";
const GRID = "grid";
const LIST = "list";

export default class Contents extends Component {
  componentDidMount() {
    let subscribingPresses = getLocalData(SUBSCRIBING_PRESSES_KEY);
    if (!subscribingPresses) subscribingPresses = [];
    setTimeout(() => store.dispatch(loadSubscribing(subscribingPresses)), 0);
    store.dispatch(fetchPresses());
  }

  template() {
    return `
       <div class="options">
         <div class="options__subscription-menu"></div>
         <div class="options__style-menu"></div>
       </div>
       <div class="view-container"></div>
          `;
  }

  renderChildComponents() {
    const subscriptionMenu = this.parentElement.querySelector(
      ".options__subscription-menu"
    );
    new SubscriptionMenu(subscriptionMenu);

    const viewerContainers = this.parentElement.querySelector(
      ".options__style-menu"
    );
    new StyleMenu(viewerContainers);

    const viewContainer = this.parentElement.querySelector(".view-container");
    const { viewOption } = store.getState().contents;

    viewOption === GRID
      ? new GridView(viewContainer)
      : new ListView(viewContainer);
  }
}

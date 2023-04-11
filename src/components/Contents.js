import Component from "../core/Component.js";
import {
  SUBSCRIBING_PRESSES_KEY,
  getLocalData,
  setLocalData,
} from "../storage/storageUtils.js";
import GridView from "./GridView.js";
import ListView from "./ListView.js";
import StyleMenu from "./StyleMenu.js";
import SubscriptionMenu from "./SubscriptionMenu.js";

const ALL = "all";
const SUBSCRIBING = "sub";
const GRID = "grid";
const LIST = "list";

export default class Contents extends Component {
  setup() {
    this.state = {
      subscribingPresses: [],
      presses: [],
      viewOption: LIST,
      subscriptionOption: ALL,
    };
  }

  async componentDidMount() {
    let subscribingPresses = getLocalData(SUBSCRIBING_PRESSES_KEY);
    if (!subscribingPresses) subscribingPresses = [];

    try {
      const res = await fetch("http://localhost:3001/presses");
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      const presses = await res.json();

      presses.sort(() => Math.random() - 0.5);

      this.setState({ presses, subscribingPresses });
    } catch (e) {
      console.log(e);
    }
  }

  addSubscribing(press, shouldUpdate) {
    const newSubscribingPresses = [...this.state.subscribingPresses, press];
    setLocalData(SUBSCRIBING_PRESSES_KEY, newSubscribingPresses);
    this.setState({ subscribingPresses: newSubscribingPresses }, shouldUpdate);
  }

  removeSubscribing(press, shouldUpdate) {
    const newSubscribingPresses = this.state.subscribingPresses.filter(
      (subscribingPress) => subscribingPress !== press
    );
    setLocalData(SUBSCRIBING_PRESSES_KEY, newSubscribingPresses);
    this.setState({ subscribingPresses: newSubscribingPresses }, shouldUpdate);
  }

  setViewGrid() {
    this.setState({ viewOption: GRID });
  }

  setViewList() {
    this.setState({ viewOption: LIST });
  }

  setSubscriptionAll() {
    this.setState({ subscriptionOption: ALL });
  }

  setSubscriptionSubscribing() {
    this.setState({ subscriptionOption: SUBSCRIBING });
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
    new SubscriptionMenu(subscriptionMenu, {
      setSubscriptionAll: this.setSubscriptionAll.bind(this),
      setSubscriptionSubscribing: this.setSubscriptionSubscribing.bind(this),
    });

    const viewerContainers = this.parentElement.querySelector(
      ".options__style-menu"
    );
    new StyleMenu(viewerContainers, {
      setViewGrid: this.setViewGrid.bind(this),
      setViewList: this.setViewList.bind(this),
    });

    const viewContainer = this.parentElement.querySelector(".view-container");
    const { presses, subscribingPresses, viewOption, subscriptionOption } =
      this.state;

    viewOption === GRID
      ? new GridView(viewContainer, {
          presses,
          subscribingPresses,
          subscriptionOption,
          addSubscribing: this.addSubscribing.bind(this),
          removeSubscribing: this.removeSubscribing.bind(this),
        })
      : new ListView(viewContainer, {
          presses,
          subscribingPresses,
        });
  }
}

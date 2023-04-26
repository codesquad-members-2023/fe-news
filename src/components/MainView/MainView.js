import { Component } from "../../core/Component.js";
import { FilterBtns } from "./Buttons/FilterBtns.js";
import { GridView } from "./GridView/GridView.js";
import { ListView } from "./ListView/ListView.js";
import { ViewBtns } from "./Buttons/ViewBtns.js";
import { NoticeView } from "./NoticeView/NoticeView.js";
import {
  ALL_PRESSES,
  GRID,
  GRID_VIEW,
  LIST,
  PRESS_STATUS,
} from "../../constants/index.js";

export class MainView extends Component {
  setUp() {
    this._state = {
      filterBtnState: ALL_PRESSES,
      viewBtnState: GRID,
    };
  }

  templete() {
    return `
      <div class="main__header">
        <div class="main__filter-btn__container"></div>
        <div class="main__view-btn__container"></div>
      </div>
      <div class="view__container"></div>
    `;
  }

  mounted() {
    const { allPressData, subscribedPressSrcs } = this.props;
    const { subscribePress, changeFilterBtnState, changeViewBtnState } = this;
    const { filterBtnState, viewBtnState } = this._state;

    const filterBtnsContainer = this.target.querySelector(
      ".main__filter-btn__container"
    );
    const viewBtnContainer = this.target.querySelector(
      ".main__view-btn__container"
    );

    new FilterBtns(filterBtnsContainer, {
      changeViewBtnState: changeViewBtnState.bind(this),
      changeFilterBtnState: changeFilterBtnState.bind(this),
      filterBtnState,
    });

    new ViewBtns(viewBtnContainer, {
      changeViewBtnState: changeViewBtnState.bind(this),
      viewBtnState,
    });

    const targetPressData =
      filterBtnState === ALL_PRESSES ? allPressData : subscribedPressSrcs;
    const targetPressSubscribeStatus = this.getSubscribeStatus(
      targetPressData,
      subscribedPressSrcs
    );
    const viewContainer = this.target.querySelector(".view__container");
    const isSubscribePressExist = targetPressData.length !== 0;

    if (viewBtnState === GRID) {
      const { START_PAGE, PAGE_LIMIT, ITEM_LIMIT_PER_PAGE } = GRID_VIEW;

      new GridView(viewContainer, {
        START_PAGE,
        PAGE_LIMIT,
        ITEM_LIMIT_PER_PAGE,
        targetPressData,
        targetPressSubscribeStatus,
        subscribePress: subscribePress.bind(this),
      });
    } else if (viewBtnState === LIST && isSubscribePressExist) {
      const { pressCategories } = this.props;

      new ListView(viewContainer, {
        filterBtnState,
        viewBtnState,
        pressData: targetPressData,
        pressCategories,
        targetPressSubscribeStatus,
        subscribePress: subscribePress.bind(this),
      });
    } else {
      new NoticeView(viewBtnContainer);
    }
  }

  subscribePress(pressSrc) {
    const { subscribedPressSrcs, allPressData } = this.props;
    const isAlreadySubScribed = subscribedPressSrcs.some(
      ({ logo_src }) => logo_src === pressSrc
    );
    if (isAlreadySubScribed) {
      this.unsubcribe(pressSrc, subscribedPressSrcs);
    } else {
      this.subscribe(pressSrc, subscribedPressSrcs, allPressData);
    }
  }

  unsubcribe(pressSrc, subscribedPressSrcs) {
    const targetIndex = subscribedPressSrcs.indexOf({ logo_src: pressSrc });
    subscribedPressSrcs.splice(targetIndex, 1);
  }

  subscribe(pressSrc, subscribedPressSrcs, allPressData) {
    const targetPressData = allPressData.find(
      (press) => press.logo_src === pressSrc
    );
    subscribedPressSrcs.push(targetPressData);
  }

  changeFilterBtnState(state) {
    this.setState({ filterBtnState: state });
  }

  changeViewBtnState(state) {
    this.setState({ viewBtnState: state });
  }

  getSubscribeStatus(pressData, subscribedPressSrcs) {
    const targetPressSubscribeStatus = [];
    const { SUBSCRIBED, UNSUBSCRIBED } = PRESS_STATUS;

    pressData.forEach(({ logo_src }) => {
      const pressSrc = logo_src;
      const isPressSubscribed = subscribedPressSrcs.some(({ logo_src }) => {
        const subscribedSrc = logo_src;
        return subscribedSrc === pressSrc;
      });
      if (isPressSubscribed) targetPressSubscribeStatus.push(SUBSCRIBED);
      else targetPressSubscribeStatus.push(UNSUBSCRIBED);
    });
    return targetPressSubscribeStatus;
  }
}

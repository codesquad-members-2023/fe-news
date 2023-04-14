import { Component } from "../../core/Component.js";
import { FilterBtns } from "./Buttons/FilterBtns.js";
import { GridView } from "./GridView/GridView.js";
import { ListView } from "./ListView/ListView.js";
import { ViewBtns } from "./Buttons/ViewBtns.js";

export class MainView extends Component {
  setUp() {
    this._state = {
      btnState: "all-press",
      viewState: "grid",
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
    const { pressData, pageLimit, itemLimitPerPage, subscribedPressSrcs } =
      this.props;
    const { subscribePress, changeBtnState, changeViewState } = this;
    const { btnState, viewState } = this._state;

    const filterBtnsContainer = this.target.querySelector(
      ".main__filter-btn__container"
    );
    const viewBtnContainer = this.target.querySelector(
      ".main__view-btn__container"
    );

    new FilterBtns(filterBtnsContainer, {
      btnState: btnState,
      changeBtnState: changeBtnState.bind(this),
      changeViewState: changeViewState.bind(this),
    });
    new ViewBtns(viewBtnContainer, {
      viewState: viewState,
      changeViewState: changeViewState.bind(this),
    });

    const targetPressData =
      btnState === "all-press" ? pressData : subscribedPressSrcs;
    const allPressSubscribeStatus = this.getSubscribeStatus(
      targetPressData,
      subscribedPressSrcs
    );
    const viewContainer = this.target.querySelector(".view__container");

    if (viewState === "grid") {
      new GridView(viewContainer, {
        pageLimit: pageLimit,
        itemLimitPerPage: itemLimitPerPage,
        allPressData: targetPressData,
        btnDir: this.btnDir,
        allPressSubscribeStatus: allPressSubscribeStatus,
        subscribePress: subscribePress.bind(this),
      });
    } else if (viewState === "list") {
      new ListView(viewContainer, {
        btnState: btnState,
        viewState: viewState,
        pressData: targetPressData,
        allPressSubscribeStatus: allPressSubscribeStatus,
        subscribePress: subscribePress.bind(this),
      });
    }
  }

  subscribePress(pressSrc) {
    const { subscribedPressSrcs, pressData } = this.props;
    const isAlreadySubScribed = subscribedPressSrcs.some(
      ({ logo_src }) => logo_src === pressSrc
    );
    if (isAlreadySubScribed) {
      const targetIndex = subscribedPressSrcs.indexOf({ logo_src: pressSrc });
      subscribedPressSrcs.splice(targetIndex, 1);
    } else {
      const targetPressData = pressData.find(
        (press) => press.logo_src === pressSrc
      );
      subscribedPressSrcs.push(targetPressData);
    }
  }

  changeBtnState(state) {
    this.setState({ btnState: state });
  }

  changeViewState(state) {
    this.setState({ viewState: state });
  }

  getSubscribeStatus(pressData, subscribedPressSrcs) {
    const allPressSubscribeStatus = [];
    pressData.forEach(({ logo_src }) => {
      const pressSrc = logo_src;
      const isPressSubscribed = subscribedPressSrcs.some(({ logo_src }) => {
        const subscribedSrc = logo_src;
        return subscribedSrc === pressSrc;
      });
      if (isPressSubscribed) allPressSubscribeStatus.push("구독되어 있습니다.");
      else allPressSubscribeStatus.push("구독되어 있지 않습니다.");
    });
    return allPressSubscribeStatus;
  }
}

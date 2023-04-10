import { Component } from "../../core/Component.js";
import { GridView } from "./GridView.js";

export class ViewContainer extends Component {
  templete() {
    return `
      <div class="main__header">
        <div class="main__btn all-press">전체 언론사</div>
        <div class="main__btn subscribed-press">내가 구독한 언론사</div>
        <img src="src/images/list_btn.svg" alt="" />
        <img src="src/images/grid_btn.svg" alt="" />
      </div>
      <div class="view__container"></div>
    `;
  }

  setEvent() {
    const viewContainer = this.target.querySelector(".view__container");
    const subscribedPressSrcsBtn = this.target.querySelector(
      ".main__btn.subscribed-press"
    );
    const allPressBtn = this.target.querySelector(".main__btn.all-press");
    const { subscribePress } = this;
    const { pressData, subscribedPressSrcs } = this.props;

    subscribedPressSrcsBtn.addEventListener("click", () => {
      const subscribePressSubscribeStatus = this.getSubscribeStatus(
        subscribedPressSrcs,
        subscribedPressSrcs
      );
      new GridView(viewContainer, {
        page: 1,
        pageItemLimit: 24,
        press: subscribedPressSrcs,
        btnDir: ["left", "right"],
        subscribeStatus: subscribePressSubscribeStatus,
        subscribePress: subscribePress.bind(this),
      });
    });

    allPressBtn.addEventListener("click", () => {
      const allPressSubscribeStatus = this.getSubscribeStatus(
        pressData,
        subscribedPressSrcs
      );
      new GridView(viewContainer, {
        page: 1,
        pageItemLimit: 24,
        press: pressData,
        btnDir: ["left", "right"],
        subscribeStatus: allPressSubscribeStatus,
        subscribePress: subscribePress.bind(this),
      });
    });
  }

  mounted() {
    const { pressData, subscribedPressSrcs } = this.props;
    const viewContainer = this.target.querySelector(".view__container");
    const { subscribePress } = this;
    const subscribeStatus = this.getSubscribeStatus(
      pressData,
      subscribedPressSrcs
    );

    new GridView(viewContainer, {
      page: 1,
      pageItemLimit: 24,
      press: pressData,
      btnDir: ["left", "right"],
      subscribeStatus: subscribeStatus,
      subscribePress: subscribePress.bind(this),
    });
  }

  subscribePress(pressSrc) {
    const { subscribedPressSrcs } = this.props;
    const isAlreadySubScribed = subscribedPressSrcs.some(
      ({ logo_src }) => logo_src === pressSrc
    );
    if (isAlreadySubScribed) {
      const targetIndex = subscribedPressSrcs.indexOf({ logo_src: pressSrc });
      subscribedPressSrcs.splice(targetIndex, 1);
    } else {
      subscribedPressSrcs.push({ logo_src: pressSrc });
    }
  }

  getSubscribeStatus(pressData, subscribedPressSrcs) {
    const subscribeStatus = [];
    pressData.forEach(({ logo_src }) => {
      const pressSrc = logo_src;
      const isPressSubscribed = subscribedPressSrcs.some(({ logo_src }) => {
        const subscribedSrc = logo_src;
        return subscribedSrc === pressSrc;
      });
      if (isPressSubscribed) subscribeStatus.push("구독되어 있습니다.");
      else subscribeStatus.push("구독되어 있지 않습니다.");
    });
    return subscribeStatus;
  }
}

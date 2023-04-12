import { Component } from "../../core/Component.js";

export class ViewBtns extends Component {
  setUp() {
    this._state = {
      btnColor: [
        {
          list: "gray",
          grid: "blue",
        },
      ],
    };
  }

  templete() {
    const { btnColor } = this._state;
    return `${Object.entries(...btnColor).reduce(
      (acc, [viewtype, color]) =>
        acc +
        `<img class="main__btn ${viewtype} ${color}" src="src/images/${viewtype}_btn_${color}.svg" alt="" />`,
      ""
    )}`;
  }

  setEvent() {
    this.target.addEventListener(
      "click",
      ({ target: { nodeName, className } }) => {
        if (nodeName === "IMG") {
          const [imgName, viewtype, color] = className.split(" ");
          const targetColor = color === "gray" ? "blue" : "gray";
          const oppositeColor = targetColor === "gray" ? "blue" : "gray";
          this.setState({
            btnColor: [
              {
                list: viewtype === "list" ? targetColor : oppositeColor,
                grid: viewtype === "grid" ? targetColor : oppositeColor,
              },
            ],
          });
        }
      }
    );
  }
}

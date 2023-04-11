import Component from "../core/Component.js";

export default class StyleMenu extends Component {
  setEvent() {
    const { setViewGrid, setViewList } = this.props;

    this.addEvent("click", ".list-icon", setViewList);
    this.addEvent("click", ".grid-icon", setViewGrid);
  }

  template() {
    return `
    <img class="list-icon" src="../../assets/icons/list-view.svg" alt="list view icon" /> 
    <img class="grid-icon" src="../../assets/icons/grid-view.svg" alt="grid view icon" />
    `;
  }
}

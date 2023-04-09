import Component from "../core/Component.js";

export default class Viewer extends Component {
  template() {
    return `
    <img src="../../assets/icons/list-view.svg" alt="list view icon" /> 
    <img src="../../assets/icons/grid-view.svg" alt="grid view icon" />
    `;
  }
}

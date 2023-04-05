export class HeaderView {
    constructor() {
        this._template = `<div></div>`;
        this._templateElement = document.createElement('template');
        this._element = this._templateElement.content
            .firstElementChild;
    }
    setTemplate(state) {
        this._template = `<header>${state.title}</header>`;
    }
    render(state) {
        this.setTemplate(state);
        this._templateElement.innerHTML = this._template;
    }
    get element() {
        return this._templateElement.content.firstElementChild;
    }
}

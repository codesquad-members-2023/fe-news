interface createProps {
  tagName: string;
}

interface selectProps {
  selector: string;
  target?: HTMLElement;
}

interface getProps {
  target: HTMLElement;
  name: string;
}

interface addProps {
  target: HTMLElement;
  template: string;
}

interface addShadowProps {
  target: HTMLElement;
}

interface addStyleProps {
  target: HTMLElement;
  style: (target: HTMLElement) => HTMLStyleElement;
}

function create({ tagName }: createProps) {
  return document.createElement(tagName);
}

function select({ selector, target }: selectProps) {
  return target
    ? target.querySelector(selector)
    : document.querySelector(selector);
}

function get({ target, name }: getProps) {
  if (!target.hasAttribute(name)) return null;
  return target.getAttribute(name);
}

function add({ target, template }: addProps) {
  if (!target.shadowRoot) return (target.innerHTML = template);
  target.shadowRoot.innerHTML = template;
}

function addShadow({ target }: addShadowProps) {
  return target.attachShadow({ mode: 'open' });
}

function addStyle({ target, style }: addStyleProps) {
  if (!target.shadowRoot) return target.append(style.call(target));
  return target.shadowRoot.append(style.call(target));
}

export default {
  create,
  select,
  get,
  add,
  addShadow,
  addStyle,
};

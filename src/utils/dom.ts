interface createProps {
  tagName: string;
}

interface selectProps {
  selector: string;
  parent?: HTMLElement | ShadowRoot | null;
}

interface getPropertyProps {
  target: HTMLElement | null;
  name: string;
}

interface setPropertyProps {
  target: HTMLElement | Element | null;
  name: string;
  value: string;
}

interface addProps {
  target: HTMLElement | ShadowRoot | null;
  template: string;
}

interface addShadowProps {
  target: HTMLElement | null;
}

interface addStyleProps {
  target: HTMLElement | ShadowRoot | null;
  style: HTMLStyleElement;
}

export function create({ tagName }: createProps) {
  return document.createElement(tagName);
}

export function select({ selector, parent }: selectProps) {
  return parent
    ? parent.querySelector(selector)
    : document.querySelector(selector);
}

export function getProperty({ target, name }: getPropertyProps) {
  if (!target?.hasAttribute(name)) return null;
  return target.getAttribute(name);
}

export function setProperty({ target, name, value }: setPropertyProps) {
  target?.setAttribute(name, value);
}

export function add({ target, template }: addProps) {
  if (target) target.innerHTML = template;
}

export function addShadow({ target }: addShadowProps) {
  if (target) return target.attachShadow({ mode: 'open' });
}

export function addStyle({ target, style }: addStyleProps) {
  target?.append(style);
}

export default {
  create,
  select,
  getProperty,
  add,
  addShadow,
  addStyle,
};

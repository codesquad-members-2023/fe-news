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

export function select({ selector, target }: selectProps) {
  return target
    ? target.querySelector(selector)
    : document.querySelector(selector);
}

export function get({ target, name }: getProps) {
  if (!target.hasAttribute(name)) return null;
  return target.getAttribute(name);
}

export function render({ target, template }: addProps) {
  target.innerHTML = template;
}

export default {
  select,
  get,
  render,
};

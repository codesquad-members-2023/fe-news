interface createProps {
  tagName: string;
  classList?: string[];
  attributeList?: attributeType[];
}

type attributeType = string[];

interface selectProps {
  selector: string;
  parent?: HTMLElement | Element | ShadowRoot | null | undefined;
}

interface getPropertyProps {
  target: HTMLElement | null;
  name: string;
}

interface setPropertyProps {
  target: HTMLElement | Element | null | undefined;
  name: string;
  value: string;
}

interface addProps {
  target: HTMLElement | ShadowRoot | null | Element | undefined;
  template: string;
}

interface addShadowProps {
  target: HTMLElement | null;
}

interface addStyleProps {
  target: HTMLElement | ShadowRoot | null;
  style: HTMLStyleElement;
}

export function create({ tagName, classList, attributeList }: createProps) {
  const element = document.createElement(tagName);
  if (classList)
    classList.forEach((_class: string) => {
      element.classList.add(_class);
    });
  if (attributeList)
    attributeList.forEach((_attribute: attributeType) => {
      const [key, value] = _attribute;
      element.setAttribute(key, value);
    });
  return element;
}
export function createWrap() {
  const wrap = create({ tagName: 'div' });
  wrap.classList.add('wrap');
  return wrap;
}

export function select({ selector, parent }: selectProps) {
  return parent
    ? parent.querySelector(selector)
    : document.querySelector(selector);
}

export function selectAll({ selector, parent }: selectProps) {
  return parent
    ? parent.querySelectorAll(selector)
    : document.querySelectorAll(selector);
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

export const toggleClass = (
  target: Element | null,
  action: 'show' | 'hide'
) => {
  if (action === 'hide') {
    if (target?.classList.contains('show')) target?.classList.remove('show');
  }
  if (action === 'show') {
    if (!target?.classList.contains('show')) target?.classList.add('show');
  }
};

export default {
  create,
  select,
  getProperty,
  add,
  addShadow,
  addStyle,
  toggleClass,
};

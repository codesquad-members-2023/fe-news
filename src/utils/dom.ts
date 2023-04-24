interface createProps {
  tagName: string;
  classList?: string[];
  attributeList?: attributeType[];
  text?: string;
}

type attributeType = string[];

interface selectProps {
  selector: string[];
  parent?: Element | null;
}

interface getPropertyProps {
  target: HTMLElement | Element | null;
  name: string;
  isStringfied?: boolean;
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

export function create({
  tagName,
  classList,
  attributeList,
  text,
}: createProps) {
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
  if (text) {
    element.innerText = text;
  }
  return element;
}
export function createWrap() {
  const wrap = create({ tagName: 'div' });
  wrap.classList.add('wrap');
  return wrap;
}

export function select({ selector, parent = null }: selectProps) {
  return selector.reduce((pre: any, curr: string, i: number) => {
    if (i === 0) {
      const hasShadowRoot = parent?.shadowRoot;
      return parent
        ? hasShadowRoot
          ? parent.shadowRoot.querySelector(curr)
          : parent.querySelector(curr)
        : document.querySelector(curr);
    }
    const hasShadowRoot = pre?.shadowRoot;
    return hasShadowRoot
      ? pre.shadowRoot.querySelector(curr)
      : pre.querySelector(curr);
  }, null);
}

export function selectAll({ selector, parent }: selectProps) {
  return selector.reduce((pre: any, curr: string, i: number) => {
    if (i === selector.length - 1) {
      const target = pre ?? parent ?? document;
      const hasShadowRoot = target?.shadowRoot;
      return hasShadowRoot
        ? target.shadowRoot.querySelectorAll(curr)
        : target.querySelectorAll(curr);
    }
    if (i === 0) {
      const hasShadowRoot = parent?.shadowRoot;
      return parent
        ? hasShadowRoot
          ? parent.shadowRoot.querySelector(curr)
          : parent.querySelector(curr)
        : document.querySelector(curr);
    }
    const hasShadowRoot = pre?.shadowRoot;
    return hasShadowRoot
      ? pre.shadowRoot.querySelector(curr)
      : pre.querySelector(curr);
  }, null);
}

export function getProperty({ target, name, isStringfied }: getPropertyProps) {
  if (!target?.hasAttribute(name)) return null;
  const value = target.getAttribute(name);
  if (value && isStringfied) {
    return JSON.parse(value);
  }
  return value;
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

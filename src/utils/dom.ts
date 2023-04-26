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
  type?: 'object' | 'string' | 'number' | 'boolean';
}

interface setPropertyProps {
  target: HTMLElement | Element | null | undefined;
  name: string;
  value: object | string | number;
  type?: 'object' | 'string' | 'number' | 'boolean';
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

export function getProperty({
  target,
  name,
  type = 'string',
}: getPropertyProps) {
  if (!target?.hasAttribute(name)) return null;
  const value = target.getAttribute(name);
  if (!value) return;
  if (type === 'object') {
    return JSON.parse(value);
  }
  if (type === 'number') {
    return Number(value);
  }
  if (type === 'boolean') {
    return Boolean(Number(value));
  }
  return value;
}

export function setProperty({
  target,
  name,
  value,
  type = 'string',
}: setPropertyProps) {
  if (type === 'object') {
    return target?.setAttribute(name, JSON.stringify(value));
  }
  return target?.setAttribute(name, `${value}`);
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

export const toggleClass = ({
  target = null,
  className = '',
}: {
  target: Element | null;
  className: string;
}) => {
  if (!target) return;
  if (target.classList.contains(className)) target.classList.remove(className);
  else target?.classList.add(className);
};

export const addClass = ({
  target = null,
  className = '',
}: {
  target: Element | null;
  className: string;
}) => {
  if (!target) return;
  if (!target.classList.contains(className)) target.classList.add(className);
};

export const removeClass = ({
  target = null,
  className = '',
}: {
  target: Element | null;
  className: string;
}) => {
  if (!target) return;
  if (target.classList.contains(className)) target.classList.remove(className);
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

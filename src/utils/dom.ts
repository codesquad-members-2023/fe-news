export const $ = (
  selector: string,
  baseElement: Document | HTMLElement = document,
) => baseElement.querySelector(selector);

export const $$ = (
  selector: string,
  baseElement: Document | HTMLElement = document,
) => baseElement.querySelectorAll(selector);

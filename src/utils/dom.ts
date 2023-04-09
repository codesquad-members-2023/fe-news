export const $ = (
  selector: string,
  parent: Document | HTMLElement = document,
) => parent.querySelector(selector);

export const $$ = (
  selector: string,
  parent: Document | HTMLElement = document,
) => parent.querySelectorAll(selector);

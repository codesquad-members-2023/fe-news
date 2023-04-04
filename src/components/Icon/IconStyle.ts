export default function style(target: HTMLElement) {
  const style = document.createElement('style');

  style.textContent = `
    @import 'src/styles/index.css';

    :host {
      display: inline-flex;
    }
  `;
  return style;
}

export default function style() {
  const style = document.createElement('style');

  const content = `
    @import 'src/styles/index.css';

    :host {
      position: relative;
      
    }
    `;

  style.textContent = content;
  return style;
}

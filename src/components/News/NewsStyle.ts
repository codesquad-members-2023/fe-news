export default function style() {
  const style = document.createElement('style');

  const content = `


    :host {
      width: 930px;
      display: block;
      margin: 58px auto;
    }

    headline-element {
      margin-top: 40px;
    }

    press-list-element {
      margin-top: 32px;
    }
    
    `;

  style.textContent = content;
  return style;
}

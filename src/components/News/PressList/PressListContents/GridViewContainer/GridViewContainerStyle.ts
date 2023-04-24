export default function style() {
  const style = document.createElement('style');

  const content = `
    .wrap {
      
    }
    `;

  style.textContent = content;
  return style;
}

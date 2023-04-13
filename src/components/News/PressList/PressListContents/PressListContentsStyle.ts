export default function style() {
  const style = document.createElement('style');

  const content = `

    .wrap {
      position: relative;
    }

    .grid-view-container {
      display: none;
    }

    .grid-view-container.show {
      display: block;
    }

    section {
      display: none;
    }

    section.show {
      display: block;
    }

    .view {
      display: none;
    }

    .view.show {
      display: block;
    }

    `;

  style.textContent = content;
  return style;
}

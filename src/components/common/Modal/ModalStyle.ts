export default function actionStyle() {
  const style = document.createElement('style');

  style.textContent = `
      :host {
        position: absolute;
        width: 100vw;
        height: 100vh;
        
        position: fixed;
        top: 0;
        z-index: 999;
      }

      #backdrop {
        width: 100%;
        height: 100%;
      }

      .wrap {
        display: block;
        width: 320px;
        
        background-color: white;
        border: 1px solid var(--gray100);
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
      }

      .container {
        background-color: var(--white);
        filter: drop-shadow(0px 4px 2px rgba(20, 33, 43, 0.02)) drop-shadow(0px 2px 18px rgba(20, 33, 43, 0.08));
      }

      section.header {
        font-weight: var(--typo-body-md-fontweight);
        font-size: var(--typo-body-md-fontsize);
        line-height: var(--typo-body-md-lineheight);

        text-align: center;
      }

      .pointer {
        content: "";
        position: absolute;
        
        border-width: 10px;
        border-style: solid;
        border-top: 18px solid transparent;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 18px solid var(--white);
        z-index: 10000;
      }

      .btn-container {
        display: flex;
        gap: 0;
        margin: 0 auto;
        border-top: 1px solid var(--gray100);
      }

      btn-element[type="flexible"] {
        margin: 0 auto;
      }

      btn-element[type="main"] {
        order: 1;
      }

      btn-element[type="sub"] {
        order: 0;
        margin-left: auto;
      }

      p {
        margin: 0;
      }

      .text {
        font-weight: var(--typo-body-md-fontweight);
        font-size: var(--typo-body-md-fontsize);
        line-height: var(--typo-body-md-lineheight);

        text-align: center;
        color: var(--gray400);
        padding: 24px 0;
      }

      .text b {
        font-weight: var(--typo-title-md-fontweight);
        color: var(--black);
      }

      .caption {
        margin-top: 8px;
        text-align: center;
        
      }
    `;
  return style;
}

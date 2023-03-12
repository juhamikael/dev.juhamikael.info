import { LitElement, html, css } from "lit";
import { copyIcon, checkIcon } from "./icons.ts";

export class CopyCodeButton extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
      }
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        margin: 0;
        padding: 0.5rem;
        background: #292929;
        border: none;
        border-radius: 0.25rem;
        color: #fff;
        cursor: pointer;
        font-weight: 600;
      }
      span {
        margin-right: 0.5rem;
        font-family: "Montserrat", sans-serif;
        font-size: 0.8rem;
        color: #fff;
        font-style: italic;
        font-weight: 300;
      }
      
    `,
  ];

  constructor() {
    super();
    this._isCopied = false;
  }

  static get properties() {
    return {
      _isCopied: { type: Boolean },
    };
  }

  copyCode() {
    this._isCopied = true;
    const pre = this.parentElement;
    let code = pre.querySelector("code");
    const range = document.createRange();
    range.selectNode(code);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // check if the browser supports clipboard API
    if (!navigator.clipboard) {
      // if not use the old commandExec() way
      document.execCommand("copy");
    } else {
      try {
        navigator.clipboard.writeText(range.toString());
      } catch (error) {
        console.error(error);
      }
    }
    window.getSelection().removeAllRanges();
    setTimeout(() => {
      this._isCopied = false;
    }, 2000);
  }
  render() {
    return html`
      <button @click=${this.copyCode} class="copy-code-button">
        <span>${this._isCopied ? "Copied to clipboard" : "Copy code"}</span>
        ${this._isCopied ? checkIcon : copyIcon}
      </button>
    `;
  }
}
customElements.define("copy-code-button", CopyCodeButton);

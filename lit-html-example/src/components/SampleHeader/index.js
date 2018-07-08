import { html, render } from 'lit-html/lib/shady-render.js';

class SampleHeader extends HTMLElement {
  static get is() {
    return 'sample-header';
  }

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this._render()
  }

  _render() {
    const template = html`
    <style>
      header {
        background: red;
      }
    </style>
    <header>fuck</header>
    `;
    render(template, this.shadow, SampleHeader.is);
  }

}
window.customElements.define(SampleHeader.is, SampleHeader);

import { html, render } from 'lit-html/lib/shady-render.js';

class MyAvatar extends HTMLElement {
  static get is() {
    return 'my-avatar-fuck';
  }

  constructor() {
    super()
    this._render()
  }

  _render() {
    const template = html`
    <style>
      div {
        border-radius: 50%;
        border: 1px solid #ccc;
        background: red;
      }
    </style>
    <div>fuck</div>
    `;
    render(template, this.attachShadow({ mode: 'open' }), MyAvatar.is);
  }

}
window.customElements.define(MyAvatar.is, MyAvatar);

import { html, render } from 'lit-html/lib/shady-render.js';
// import { html, render } from 'lit-html/lib/lit-extended.js';
// import { html, render } from 'lit-html'

class FuckHeader extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.render()
  }

  render() {
    const template = html`
      <style>
    header {
      background: #00acc1;
      color: #FFF;
      padding: 1rem;
      font-size: 1rem;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
    </style>
    <header>
    <nav>
    test
    </nav>
    </header>
    `
    render(template, this.shadow, 'sample-fuck')
  }
}

window.customElements.define('sample-fuck', FuckHeader);

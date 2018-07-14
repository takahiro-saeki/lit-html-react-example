import { html, render } from 'lit-html/lib/shady-render.js';

class Card extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr == 'title') {
      this.render(newValue)
    }
  }

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.render('default')
  }

  render(title) {
    const template = html`
    <style>
      div {
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
        padding: .5rem 1rem;
        margin: 1rem;
      }
    </style>
    <div>${title}</div>
    `
    render(template, this.shadow, 'sample-card')
  }
}

window.customElements.define('app-card', Card);

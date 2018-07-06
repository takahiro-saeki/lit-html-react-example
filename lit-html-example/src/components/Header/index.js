import { render, html } from 'lit-html';

class Header extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super()
    this.shadow = this.attachShadow({mode: 'open'});
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    console.log(attr)
  }

  template() {
    return html`<style>
    header {
      background: #00acc1;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      color: #FFF;
      padding: 1rem;
      font-size: 1rem;
    }

    nav {
      width: 100%;
      display: flex;
    }
    </style>
    <header>
    <nav>
    <slot />
    </nav>
    </header>`
  }

  render() {
    render(this.template(), this.shadow)
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define('app-header', Header);

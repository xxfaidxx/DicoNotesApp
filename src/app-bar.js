class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
          :host {
            display: block;
            width: 100%;
            color: #FF6500;
          }
          div {
            padding: 24px 20px;
          }
          .brand-name {
            margin: 0;
            font-size: 1.7em;
          }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<h1 class="brand-name">Notes Application</h1>`;
    this._shadowRoot.appendChild(wrapper);
  }
}

customElements.define("app-bar", AppBar);

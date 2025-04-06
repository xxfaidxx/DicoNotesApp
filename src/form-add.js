import {
  customValidationBodyHandler,
  customValidationTitleHandler,
} from "./form-valid.js";

import { showLoading, hideLoading } from "./index.js";

class FormAdd extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.attachEvents();
    this.loadExternalStyles();
  }

  loadExternalStyles() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles.css";
    this.shadowRoot.appendChild(link);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style> 
        :host {
          display: block;
          width: 100%;
        }

        #noteForm {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 90%;
          max-width: 850px;
          margin: 0 auto;
          padding: 50px;
          border-radius: 8px;
          background-color: #0b192c;
          margin-bottom: 10px;
        }

        #noteForm input,
        #noteForm textarea {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        #noteForm button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        #noteForm button:hover {
          background-color: #0056b3;
        }

        .validation-message {
          color: red;
          font-size: 0.85em;
          margin-top: 4px;
        }

        input:user-invalid,
        textarea:user-invalid {
          border: 2px solid red;
        }

        input:user-valid,
        textarea:user-valid {
          border: 2px solid green;
        }
      </style>
      <form id="noteForm">
        <input type="text" id="title" placeholder="Judul Note" minlength="3" aria-describedby="titlevalidation" required>
        <p id="titlevalidation" class="validation-message"></p>

        <textarea id="body" placeholder="Isi Note" minlength="5" aria-describedby="bodyvalidation" required></textarea>
        <p id="bodyvalidation" class="validation-message"></p>

        <button type="submit">Tambah Note</button>
      </form>
    `;
  }

  attachEvents() {
    const form = this.shadowRoot.querySelector("#noteForm");
    const titleInput = this.shadowRoot.querySelector("#title");
    const bodyInput = this.shadowRoot.querySelector("#body");

    if (titleInput && bodyInput) {
      titleInput.addEventListener("input", customValidationTitleHandler);
      titleInput.addEventListener("blur", customValidationTitleHandler);
      bodyInput.addEventListener("input", customValidationBodyHandler);
      bodyInput.addEventListener("blur", customValidationBodyHandler);
    }

    form.addEventListener("submit", async (event) => {
      showLoading();
      event.preventDefault();
      const newNote = {
        title: titleInput.value,
        body: bodyInput.value,
      };

      try {
        const response = await fetch(
          "https://notes-api.dicoding.dev/v2/notes",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newNote),
          }
        );

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || "Gagal menambahkan catatan");
        }

        const result = await response.json();
        console.log("Note berhasil disimpan:", result);

        this.dispatchEvent(
          new CustomEvent("add-note", { detail: result.data })
        );

        titleInput.value = "";
        bodyInput.value = "";
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert(`Gagal menambahkan catatan: ${error.message}`);
      } finally {
        hideLoading();
      }
    });
  }
}

customElements.define("form-add", FormAdd);

export const customValidationTitleHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Judul tidak boleh kosong.");
  } else if (event.target.validity.tooShort) {
    event.target.setCustomValidity("Judul minimal harus 3 karakter.");
  }

  updateValidationMessage(event);
};

export const customValidationBodyHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("Isi note tidak boleh kosong.");
  } else if (event.target.validity.tooShort) {
    event.target.setCustomValidity("Isi note minimal harus 5 karakter.");
  }

  updateValidationMessage(event);
};

const updateValidationMessage = (event) => {
  const shadowRoot = event.target.getRootNode();
  const errorMessageEl = shadowRoot.getElementById(
    event.target.getAttribute("aria-describedby"),
  );

  if (errorMessageEl) {
    errorMessageEl.textContent = event.target.validationMessage;
  }
};

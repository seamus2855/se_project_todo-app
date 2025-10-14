class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

  _showInputError(_formElement, _inputElement, _errorMessage) {
    this._showInputError = (formElement, inputElement, settings) => {
      const errorElementId = `#${inputElement.id}-error`;
      const errorElement = formElement.querySelector(errorElementId);
      inputElement.classList.remove(settings.inputErrorClass);
      errorElement.classList.remove(settings.errorClass);
      errorElement.textContent = "";
    };
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        this._formEl,
        inputElement,
        inputElement.validationMessage,
        this
      );
    }
  }

  _hideInputError(_formElement, _inputElement, _errorMessage) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = formElement.querySelector(errorElementId);
    _inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = "";
  }

  _toggleButtonState(_formElement, _inputElement, _errorMessage) {
    this.toggleButtonState = (formElement, inputElement, settings) => {
      const errorElementId = `#${inputElement.id}-error`;
      const errorElement = formElement.querySelector(errorElementId);
      inputElement.classList.remove(settings.inputErrorClass);
      errorElement.classList.remove(settings.errorClass);
      errorElement.textContent = "";
    };
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formEl.querySelector(
      this._submitButtonSelector
    );

    this._toggleButtonState(this._inputList, buttonElement, this);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        toggleButtonState(this._inputList, buttonElement, this);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

const resetValidation = (formEl, config) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
};

export default FormValidator;

const disableButton = (buttonElement, _config) => {
  buttonElement.disabled = true;
};

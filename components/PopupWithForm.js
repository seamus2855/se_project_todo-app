import popup from "./components/Popup.js";

class popupWithForm extends popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector: popupSelector });
    this._popupForm = this._popupElement.quarySelector(".popup__form");
    this.handleFormSubmit = handleFormSubmit;
  }

  _getInputValues(){
   this._InputList = this._popupForm.quarySelector(".popup__input");
   
   const inputValues = {};
   this._InputList.forEach((input) => {
   });
   return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(evt);
     const InputValues = this._getInputValues();
    });
  }
}
export default popupWithForm;


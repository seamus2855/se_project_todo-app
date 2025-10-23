class popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    document.addEventListener("DOMContentLoaded", () => {
      const popup = new Popup();
    });
    this._handleEscapeCloseBound = this._handleEscapeClose.bind(this);
    document.addEventListener("DOMContentLoaded", () => {
      const popup = new popup();
    });
  }
  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeCloseBound);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeCloseBound);
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup")
      ) {
        this.close();
      }
    });
  }
}
export default popup;

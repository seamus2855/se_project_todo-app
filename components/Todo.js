class Todo {
  constructor(data, templateSelector, handleCheck, handleDelete ) {
    this._data = data;
   this._templateElement = document.querySelector(templateSelector);
   this._handleCheck = handleCheck;
   this._handleDelete = handleDelete;
  }

_setEventListeners() {
    const todoCheckbox = this._todoElement.querySelector(".todo__completed");
    this._deleteBtnEl.addEventListener("click", () => {
      this._handleDelete(this._completed);
      this._remove();
    });
    todoCheckbox.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      this._handleCheck(this._completed)
    });
}
    
  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDate = this._todoElement.querySelector(".todo__date");
     const todoLabel = this._todoElement.querySelector(".todo__label");
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    // Set todo name and completed status
    todoNameEl.textContent = this._data.name;

    // If a due date has been set, display it
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    // Delete button event
    todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });

    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;

import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const element = generateTodo(item);
    section.addItem(element);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const handleFormSubmit = (data) => {
  const name = data.name;
  const dateInput = data.date;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };

  const todo = generateTodo(values);
  section.addItem(todo);

  todoCounter.updateTotal(true); 

  todoValidator.resetValidation();
  addTodoPopup.close();
};

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
addTodoPopup_setEventListeners 
});
addTodoPopupEl.setEventListeners();

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

const handleDelete = (completed) => {
  todoCounter.updateTotal(false); 
  if (completed) {
    todoCounter.updateCompleted(false);
  }
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
};

initialTodos.forEach((item) => {
  renderTodo(item);
});
  renderTodo(item);
});

const todoValidator = new FormValidator(validationConfig, addTodoForm);
todoValidator.enableValidation();

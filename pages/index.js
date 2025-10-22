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

const addTodoPopup = new PopupWithForm("#add-todo-popup", (formValues) => {
  const name = formValues.name;
  const dateInput = formValues.date;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  renderTodo(values);
});

addTodoPopup.setEventListeners();

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {}
addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const name = evt.target.name.value;
const dateInput = evt.target.date.value;

const date = new Date(dateInput);
date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

const id = uuidv4();
const values = { name, date, id };
renderTodo(values);

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo);

  todoValidator.resetForm(); // Add this line

  addTodoPopup.close();
};

initialTodos.forEach((item) => {
  renderTodo(item);
});

const todoValidator = new FormValidator(validationConfig, addTodoForm);
todoValidator.enableValidation();

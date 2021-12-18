const tasks = [
  { id: 1, completed: false, text: "Посмотреть новый урок по JavaScript" },
  { id: 2, completed: false, text: "Выполнить тест после урока" },
  { id: 3, completed: false, text: "Выполнить ДЗ после урока" },
];

//

tasks.forEach((el) => {
  let tasksList = document.querySelector(".tasks-list");

  let taskItem = document.createElement("div");
  taskItem.className = "task-item";
  taskItem.dataset.taskId = el.id;
  tasksList.append(taskItem);

  let mainContainer = document.createElement("div");
  mainContainer.className = taskItem.className + "__main-container";
  taskItem.append(mainContainer);

  let mainContent = document.createElement("div");
  mainContent.className = taskItem.className + "__main-content";
  mainContainer.append(mainContent);

  let checkboxForm = document.createElement("form");
  checkboxForm.className = "checkbox-form";
  mainContent.append(checkboxForm);

  let checkbox = document.createElement("input");
  checkbox.className = checkboxForm.className + "__checkbox";
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "task-" + el.id);
  checkboxForm.append(checkbox);

  let label = document.createElement("label");
  label.htmlFor = "task-" + el.id;
  checkboxForm.append(label);

  let text = document.createElement("span");
  text.className = taskItem.className + "__text";
  text.innerText = el.text;
  mainContent.append(text);

  let deleteButton = document.createElement("button");
  deleteButton.className = taskItem.className + "__delete-button";
  deleteButton.classList.add("default-button");
  deleteButton.classList.add("delete-button");
  deleteButton.dataset.deleteTaskId = 5;
  deleteButton.innerText = "Удалить";
  mainContainer.append(deleteButton);
});

//

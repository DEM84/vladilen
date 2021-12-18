const tasks = [
  { id: 1, completed: false, text: "Посмотреть новый урок по JavaScript" },
  { id: 2, completed: false, text: "Выполнить тест после урока" },
  { id: 3, completed: false, text: "Выполнить ДЗ после урока" },
];

let tasksList;

let newTask = () => {
  tasks.forEach((el) => {
    tasksList = document.querySelector(".tasks-list");

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

    return tasksList;
  });
};

checkTask = (arr, value) => {
  let result = false;
  arr.forEach((el) => {
    if (value === el.text) {
      result = true;
    }
  });

  return result;
};

newTask();

let errorInput = document.createElement("span");
errorInput.className = "error-message-block";

let createTaskBlock = document.querySelector(".create-task-block");
let taskBlockInput = document.querySelector(".create-task-block__input");

createTaskBlock.addEventListener("submit", (event) => {
  event.preventDefault();

  let checkDouble = checkTask(tasks, taskBlockInput.value);

  if (!taskBlockInput.value) {
    errorInput.innerText = "Название задачи не должно быть пустым";
    createTaskBlock.append(errorInput);
  } else if (checkDouble) {
    errorInput.innerText = "Задача с таким названием уже существует.";
    createTaskBlock.append(errorInput);
  } else {
    if (errorInput) {
      errorInput.remove();
    }

    let newId = tasks.length + 1;

    tasks.push({
      id: newId,
      completed: false,
      text: taskBlockInput.value,
    });

    tasksList.innerText = "";

    newTask();
  }
});

//

const tasks = [
  { id: 1, completed: false, text: "Посмотреть новый урок по JavaScript" },
  { id: 2, completed: false, text: "Выполнить тест после урока" },
  { id: 3, completed: false, text: "Выполнить ДЗ после урока" },
];

// Создаём модальное окно

let body = document.querySelector("body");

let modalOverlay = document.createElement("div");
modalOverlay.className = "modal-overlay";
modalOverlay.classList.add("modal-overlay_hidden");
body.append(modalOverlay);

let deleteModal = document.createElement("div");
deleteModal.className = "delete-modal";
modalOverlay.append(deleteModal);

let deleteModalQuestion = document.createElement("h3");
deleteModalQuestion.className = "delete-modal__question";
deleteModalQuestion.innerText = "Вы действительно хотите удалить эту задачу?";
deleteModal.append(deleteModalQuestion);

let deleteModalButtons = document.createElement("div");
deleteModalButtons.className = "delete-modal__buttons";
deleteModal.append(deleteModalButtons);

let cancelButton = document.createElement("button");
cancelButton.className = "delete-modal__button";
cancelButton.classList.add("delete-modal__cancel-button");
cancelButton.innerText = "Отмена";
deleteModalButtons.append(cancelButton);

let confirmButton = document.createElement("button");
confirmButton.className = "delete-modal__button";
confirmButton.classList.add("delete-modal__confirm-button");
confirmButton.innerText = "Удалить";
deleteModalButtons.append(confirmButton);

let tasksList;

// Функция создания новой задачи

let newTask = () => {
  // ð Н: Мне не очень симпатична такая реализация функции добавления новой задачи. Получается, что
  // каждый раз при добавлении 1 задачи происходит перерисовка вообще всех записей на экране.
  // Эта функция немножко слишком "много" на себя берет и занимается не только добавлением задачи к списку задач,
  // но еще и рендерингом всего списка целиком.
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
    deleteButton.dataset.deleteTaskId = el.id;
    deleteButton.innerText = "Удалить";
    mainContainer.append(deleteButton);

    return tasksList;
  });
};

newTask();

// Функция проверки на существование такой задачи

checkTask = (arr, value) => {
  let result = false;
  arr.forEach((el) => {
    if (value === el.text) {
      result = true;
    }
  });
  return result;
};

// Проверяем правильность заполнения инпута при добавлении задачи

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

    // ð Н: Лучше такие вещи объединять в какие-то смысловые модули, например:
    // tasksListController = { add: func, render: func, cleanUp: func }
    // и потом вызывать функцию tasksListController.cleanUp() где она нужна
    // В больших кусках кода очень сложно будет отслеживать взаимосвязи между просто глобальными переменными типа tasksList
    tasksList.innerText = "";

    // ð Н: Обман, получается, в названии. На деле не newTask, а renderTasksList или вроде того.
    newTask();
  }
});

// Удаление задачи из разметки и из массива

// ð Н: Главная беда в том, что ты добавлял EventListener внутри другого EventListener
//
// Представь. Три задачи. Одно модальное окно. На каждой кнопке "Удалить" висит свой обработчик на click.
// Ты нажимаешь на кнопку "Удалить" раз. Внутри модального окна "замыкаются" (ты уже знаком с замыканиями?)
// со всеми id-шниками и target-ами два новых Listener-а.
// Каждый последующий раз нажимая кнопку "Удалить" на других таргетах ты добавляешь еще пару Listener-ов
// на те же события для тех же двух кнопок с новым набором данных. И при окончательном нажатии на "Удалить"
// срабатывает уже не один обработчик события, а все, которые были созданы до последнего нажатия.
//
// Конструкция вложенных Listener-ов выглядит очень удобно на первый взгляд: можно просто пошарить target и
// состояние между главным событием (Вызов модального окна) и подчиненным событием (Нажатие одной из двух кнопок)
// Но вкладывать друг в друга listener-ы не стоит. Гипотетически, можно каждый раз при Вызове модального окна очищать
// все Listener-ы с кнопок перед тем, как назначить новые, но эта идея тоже дерьмо.
//
// Как решить тогда вопрос передачи состояния между модальным окном и его подчиненными частями?
// Можно завести глобальную переменную, которая бы хранила самый главный параметр открытого модального окна:
let currentModalTargetId;

// ð Н: мне нравится, что ты везде добавляешь проверки, это крайне полезно
if (tasksList) {
  tasksList.addEventListener("click", (event) => {
    let { target } = event;

    const delButton = target.closest(".delete-button");

    currentModalTargetId = target.dataset.deleteTaskId;
    let delAction = false;

    if (delButton) {
      console.log("Вызов модального оуна с удалением / delButton", delButton);
      modalOverlay.classList.remove("modal-overlay_hidden");
    }
  });
}

// ð Н: Я вынесла эти два обработчика на уровень выше
if (cancelButton) {
  cancelButton.addEventListener("click", () => {
    currentModalTargetId = null;
    modalOverlay.classList.add("modal-overlay_hidden");
    return;
  });
}

if (confirmButton) {
  confirmButton.addEventListener("click", () => {
    const targetItem = document.querySelector(
      `.task-item[data-task-id="${currentModalTargetId}"]`
    );

    targetItem.remove();

    let delId = currentModalTargetId - 1;

    console.log("delId", delId);

    // ð Н: Тут можно сплайсить (тогда не придется искать способ почистить empty поля),
    // НО! нужно будет после удаления одного элемента перерисовать список целиком, потому что id у элементов массива
    // поменяются (пересчитаются, особенно если из середины удалим).
    // tasks.splice(delId, 1);

    // ð Н: Когда случается delete наш дорогой массив конвертируется в объект
    // В данном случае это даже удобно получается, просто FYI, что delete это
    // только для объектов
    delete tasks[delId];

    modalOverlay.classList.add("modal-overlay_hidden");
  });
}

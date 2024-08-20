let todoList = document.querySelector(".todo-list");
let todoTask = document.querySelector("li.todo-task");
let add = document.querySelector(".add-task");
let toggleDarkMode = document.querySelector(".toggle-dark-mode");

todoList.addEventListener("click", function (event) {
  if (event.target.matches(".remove")) {
    event.target.closest("li").remove();
  } else if (event.target.matches(".toggle-color")) {
    event.preventDefault();
    let color = event.target.dataset.color;
    let nearestTask = event.target.closest("li");
    let is_active = nearestTask.classList.contains(color);

    nearestTask.classList.remove("blue", "green", "red");
    nearestTask.style.color = "#000000";

    if (!is_active) {
      nearestTask.style.color = "#ffffff";
      nearestTask.classList.add(color);
    }
  } else if (event.target.matches(".toggle-complete")) {
    var nearestTask = event.target.closest("li");
    var is_complete = nearestTask.classList.contains("completed");

    nearestTask.classList.remove("completed");

    if (!is_complete) {
      nearestTask.classList.add("completed");
    }
  }
});

add.addEventListener("click", function (e) {
  e.preventDefault();
  var addListItem = document.createElement("li");
  var taskTitle = document.getElementById("task-title");
  var taskDate = document.getElementById("task-date");
  todoList.appendChild(addListItem);
  addListItem.classList.add("todo-task");
  addListItem.innerHTML =
    '<span class="task-title"></span>' +
    '<span class="task-date"></span>' +
    '<a href="#" class="button toggle-color" data-color="blue">B</a>' +
    '<a href="#" class="button toggle-color" data-color="green">G</a>' +
    '<a href="#" class="button toggle-color" data-color="red">R</a>' +
    '<a href="#" class="button toggle-complete" data-status="mark-completed"><i class="fas fa-check"></i></a>' +
    '<a class="button remove"><i class="fas fa-trash"></i></a>';
  addListItem
    .querySelector(".task-title")
    .appendChild(document.createTextNode(taskTitle.value));
  addListItem
    .querySelector(".task-date")
    .appendChild(document.createTextNode(taskDate.value));
  taskTitle.value = "";
  taskDate.value = "";
});

toggleDarkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

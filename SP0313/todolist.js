// Select the necessary elements from the HTML
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskList = document.getElementById("taskList");

// Define an array to store the tasks
let tasks = [];

// Define a function to add a task to the list
function addTask() {
  // Get the task description and due date from the inputs
  const description = taskInput.value.trim();
  const dueDate = dateInput.value;

  // If the description is not empty
  if (description) {
    // Create a new task object with a unique ID
    const task = {
      id: Date.now(),
      description,
      dueDate,
      completed: false,
    };

    // Add the task to the array
    tasks.push(task);

    // Reset the input values
    taskInput.value = "";
    dateInput.value = "";

    // Render the updated task list
    renderTasks();
  }
}

// Define a function to render the task list
function renderTasks() {
  // Clear the current task list
  taskList.innerHTML = "";

  // For each task in the array
  tasks.forEach((task) => {
    // Create a new list item element
    const li = document.createElement("li");

    // Create a checkbox element for completing the task
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTasks();
    });
    li.appendChild(checkbox);

    // Add the task description to the list item
    const descriptionSpan = document.createElement("span");
    descriptionSpan.textContent = task.description;
    if (task.completed) {
      descriptionSpan.classList.add("completed");
    }
    li.appendChild(descriptionSpan);

    // Add the task due date to the list item
    const dateSpan = document.createElement("span");
    dateSpan.textContent = task.dueDate;
    li.appendChild(dateSpan);

    // Add a delete button to the list item
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      renderTasks();
    });
    li.appendChild(deleteButton);

    // Add the list item to the task list
    taskList.appendChild(li);
  });
}

// Define a function to reload the tasks from local storage
function reloadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    tasks = storedTasks;
    renderTasks();
  }
}

// Reload the tasks when the page loads
reloadTasks();

// Save the tasks to local storage when the window is closed
window.addEventListener("beforeunload", () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

// Get the button and task list elements
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// When the "Add Task" button is clicked
addTaskButton.addEventListener('click', function() {
  // Get the text from the input field
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create a new list item (li)
    const taskItem = document.createElement('li');

    // Set the text of the new task item
    taskItem.textContent = taskText;

    // Create a delete button for the task item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px"; // Simple style for button
    taskItem.appendChild(deleteButton);

    // When the delete button is clicked, remove the task
    deleteButton.addEventListener('click', function() {
      taskItem.remove();
    });

    // Add the new task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  }
});
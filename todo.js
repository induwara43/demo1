// Get references to HTML elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Create an event listener for the form submission
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const taskText = taskInput.value; // Get the task text from the input

  if (taskText.trim() !== '') {
    // If the task is not empty, create a new list item and append it to the task list
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    const button = document.createElement('button');
    button.textContent = "delete";
    taskList.appendChild(button);
    taskInput.value = ''; // Clear the input field
  }
});

